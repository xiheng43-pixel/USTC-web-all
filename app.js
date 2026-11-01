/* 信智工具箱 · 渲染与交互 */
(function () {
  'use strict';

  var SITE = window.SITE || { domestic: [], abroad: [], updated: '' };
  var TAG_TEXT = { free: '免费', campus: '校内正版', paid: '需付费' };
  var ZONES = [
    { id: 'domestic', label: '🇨🇳 正常访问' },
    { id: 'abroad', label: '🌐 国外网站' }
  ];

  function hostOf(url) {
    try { return new URL(url).host; }
    catch (e) { return String(url).replace(/^https?:\/\//, '').split('/')[0]; }
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------- 图标：favicon 优先，emoji 兜底 ---------- */
  function makeIcon(item) {
    var wrap = el('div', 'ico');
    var emoji = el('span', 'emoji', item.emoji || '🔗');
    var img = document.createElement('img');
    img.alt = '';
    img.loading = 'lazy';
    img.referrerPolicy = 'no-referrer';
    img.onload = function () {
      if (img.naturalWidth === 0) return;
      emoji.style.display = 'none';
      img.style.display = 'block';
    };
    img.onerror = function () {
      img.style.display = 'none';
      emoji.style.display = '';
    };
    img.src = item.icon || ('https://' + hostOf(item.url) + '/favicon.ico');
    wrap.appendChild(emoji);
    wrap.appendChild(img);
    return wrap;
  }

  /* ---------- 卡片 ---------- */
  function makeCard(item) {
    var href = item.direct || item.url;

    var a = document.createElement('a');
    a.className = 'card';
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.title = item.name + (item.desc ? ' · ' + item.desc : '');

    var top = el('div', 'card-top');
    top.appendChild(makeIcon(item));

    var names = el('div', 'names');
    names.appendChild(el('span', 'name', item.name));
    top.appendChild(names);
    a.appendChild(top);

    if (item.desc) a.appendChild(el('p', 'desc', item.desc));

    var foot = el('div', 'card-foot');
    foot.appendChild(el('span', 'url', href));

    var btn = el('button', 'copy', '⧉');
    btn.type = 'button';
    btn.title = '复制链接';
    btn.setAttribute('aria-label', '复制链接');
    btn.addEventListener('click', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      copyText(href, btn);
    });
    foot.appendChild(btn);
    a.appendChild(foot);

    return a;
  }

  function copyText(text, btn) {
    function done() {
      btn.textContent = '✓';
      btn.classList.add('done');
      setTimeout(function () { btn.textContent = '⧉'; btn.classList.remove('done'); }, 1200);
    }
    function fallback() {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        done();
      } catch (e) { /* 忽略 */ }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
  }

  /* ---------- 渲染一个分区 ---------- */
  function renderPanel(container, groups, zoneId) {
    container.textContent = '';
    groups.forEach(function (g, gi) {
      var section = el('section', 'group');
      section.id = 'g-' + zoneId + '-' + gi;

      var title = el('h3', 'group-title');
      if (g.emoji) title.appendChild(el('span', 'gt-ico', g.emoji));
      title.appendChild(el('span', 'gt-text', g.group));
      section.appendChild(title);

      var grid = el('div', 'grid');
      g.items.forEach(function (item) {
        var card = makeCard(item);
        card.dataset.search = [
          item.name, item.desc, item.url, item.direct || '', g.group,
          TAG_TEXT[item.tag] || '', item.kind ? '下载' : '网站',
          zoneId === 'abroad' ? '国外 需要梯子' : '国内 正常访问'
        ].join(' ').toLowerCase();
        grid.appendChild(card);
      });

      section.appendChild(grid);
      container.appendChild(section);
    });
  }

  /* ---------- 搜索 ---------- */
  function filterAll(q) {
    var key = String(q || '').trim().toLowerCase();
    var shown = 0;

    var boxes = document.querySelectorAll('.panel-body');
    for (var i = 0; i < boxes.length; i++) {
      var groups = boxes[i].querySelectorAll('.group');
      for (var g = 0; g < groups.length; g++) {
        var cards = groups[g].querySelectorAll('.card');
        var any = false;
        for (var c = 0; c < cards.length; c++) {
          var hit = !key || (cards[c].dataset.search || '').indexOf(key) !== -1;
          cards[c].hidden = !hit;
          if (hit) { any = true; shown++; }
        }
        groups[g].hidden = !any;
      }
    }

    var empty = document.getElementById('empty');
    if (empty) empty.hidden = shown !== 0;

    countVisible();
    syncCatNav();
    return shown;
  }

  /* 搜索时分类导航只留下有命中的分类，避免「搜什么都在」的错觉 */
  function syncCatNav() {
    var nav = document.getElementById('catnav');
    if (!nav) return;
    var cats = nav.querySelectorAll('.cat');
    for (var i = 0; i < cats.length; i++) {
      var gid = cats[i].getAttribute('data-gid');
      var target = gid ? document.getElementById(gid) : null;
      cats[i].hidden = !!(target && target.hidden);
    }
  }

  function countVisible() {
    ZONES.forEach(function (z) {
      var box = document.getElementById('list-' + z.id);
      var badge = document.getElementById('count-' + z.id);
      if (!box || !badge) return;
      var cards = box.querySelectorAll('.card');
      var n = 0;
      for (var i = 0; i < cards.length; i++) if (!cards[i].hidden) n++;
      badge.textContent = n;
    });
  }

  /* ---------- 分类导航：首屏就能看到分区和分类 ---------- */
  function shortName(title) {
    return String(title || '').split('·')[0].trim();
  }

  function buildCatNav() {
    var nav = document.getElementById('catnav');
    if (!nav) return;
    nav.textContent = '';

    ZONES.forEach(function (z) {
      var groups = SITE[z.id] || [];
      if (!groups.length) return;

      var row = el('div', 'catrow');
      row.appendChild(el('span', 'catrow-label', z.label));

      groups.forEach(function (g, gi) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'cat';
        b.setAttribute('data-kind', z.id);
        b.setAttribute('data-gid', 'g-' + z.id + '-' + gi);
        b.title = z.label + ' · ' + g.group;

        b.appendChild(el('span', 'cat-ico', g.emoji || '📁'));
        b.appendChild(el('span', 'cat-name', shortName(g.group)));
        b.appendChild(el('span', 'cat-n', String((g.items || []).length)));

        b.addEventListener('click', function () {
          var target = document.getElementById('g-' + z.id + '-' + gi);
          if (!target) return;
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.classList.add('flash');
          setTimeout(function () { target.classList.remove('flash'); }, 1500);
        });

        row.appendChild(b);
      });

      nav.appendChild(row);
    });
  }

  /* ---------- 主题 ---------- */
  var THEME_KEY = 'toolbox-theme';

  function applyTheme(mode, persist) {
    document.documentElement.setAttribute('data-theme', mode);
    var btn = document.getElementById('theme');
    if (btn) btn.textContent = mode === 'dark' ? '☀️' : '🌙';
    if (persist) { try { localStorage.setItem(THEME_KEY, mode); } catch (e) { /* 忽略 */ } }
  }

  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* 忽略 */ }
    var dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (dark ? 'dark' : 'light'), false);

    var btn = document.getElementById('theme');
    if (btn) {
      btn.addEventListener('click', function () {
        var now = document.documentElement.getAttribute('data-theme');
        applyTheme(now === 'dark' ? 'light' : 'dark', true);
      });
    }
  }

  /* ---------- 启动 ---------- */
  function init() {
    initTheme();

    renderPanel(document.getElementById('list-domestic'), SITE.domestic || [], 'domestic');
    renderPanel(document.getElementById('list-abroad'), SITE.abroad || [], 'abroad');
    buildCatNav();
    countVisible();

    var updated = document.getElementById('updated');
    if (updated) updated.textContent = SITE.updated || '';

    var main = document.getElementById('q');
    var mini = document.getElementById('q2');

    function apply(v) {
      if (main && main.value !== v) main.value = v;
      if (mini && mini.value !== v) mini.value = v;
      filterAll(v);
    }

    /* 只在点放大镜 / 按 Enter 时过滤，打字过程中不缩小范围 */
    function wireSearch(input) {
      if (!input) return;
      input.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter') { ev.preventDefault(); apply(input.value); }
        else if (ev.key === 'Escape') { ev.preventDefault(); apply(''); }
      });
      var box = input.parentNode;
      var btn = (box && box.querySelector) ? box.querySelector('.search-btn') : null;
      if (btn) {
        btn.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          apply(input.value);
          input.focus();
        });
      }
    }

    wireSearch(main);
    wireSearch(mini);

    /* 快捷标签 */
    var chips = document.querySelectorAll('.chip');
    for (var i = 0; i < chips.length; i++) {
      chips[i].addEventListener('click', function () {
        var q = this.getAttribute('data-q') || '';
        if (main) main.value = q;
        if (mini) mini.value = q;
        filterAll(q);
        var box = document.getElementById('list-domestic');
        if (box && box.scrollIntoView) box.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    document.addEventListener('keydown', function (ev) {
      if (ev.key === '/' && ev.target.tagName !== 'INPUT') {
        ev.preventDefault();
        if (main) main.focus();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.__toolbox = {
    filterAll: filterAll,
    countVisible: countVisible,
    renderPanel: renderPanel,
    buildCatNav: buildCatNav
  };
})();
