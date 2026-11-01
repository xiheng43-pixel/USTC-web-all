/* 信智工具箱 · 数据源
 * 分区：domestic 正常访问（国内网络直接能打开） / abroad 国外网站（需要国际网络环境）
 * tag:    free 免费 / campus 校内正版 / paid 需付费
 * kind:   page 下载页 / direct 有直链（有 kind 的卡片显示「下载页 / 直链」角标，没有的是纯网址）
 * status: ok 已联网验证 / unknown 未能自动验证（不代表打不开）
 * emoji:  favicon 取不到时的兜底图标（保证每一格都有图标）
 * direct: 直接开始下载的地址
 */
window.SITE = {
  updated: '2026-11-01',

  /* ================= 正常访问 ================= */
  domestic: [
    {
      group: '编程基础 · 程序设计 / 数据结构', emoji: '💻',
      items: [
        {
          name: 'Python 3', emoji: '🐍', desc: '所有 AI、数据课的地基，装完再补库',
          url: 'https://www.python.org/downloads/windows/', tag: 'free', kind: 'page',
          status: 'ok', icon: 'https://www.python.org/static/favicon.ico'
        },
        {
          name: 'VS Code', emoji: '💻', desc: '写 C / Python 最顺手的编辑器，插件即用',
          url: 'https://code.visualstudio.com/Download', tag: 'free', kind: 'page',
          status: 'ok',
          direct: 'https://update.code.visualstudio.com/latest/win32-x64-user/stable'
        },
        {
          name: 'Anaconda', emoji: '🧪', desc: '一次装好 Python + numpy / pandas / jupyter',
          url: 'https://www.anaconda.com/download', tag: 'free', kind: 'page',
          status: 'unknown'
        },
        {
          name: 'Jupyter', emoji: '📓', desc: '网页式笔记本，实验报告直接导出',
          url: 'https://jupyter.org/install', tag: 'free', kind: 'page',
          status: 'ok'
        },
        {
          name: 'PyCharm', emoji: '🧠', desc: 'Python 专用 IDE，学生可申请免费 Pro',
          url: 'https://www.jetbrains.com/pycharm/download/', tag: 'free', kind: 'page',
          status: 'ok'
        },
        {
          name: 'Git for Windows', emoji: '🌿', desc: '版本管理，拉实验代码、交作业必备',
          url: 'https://git-scm.com/download/win', tag: 'free', kind: 'page',
          status: 'ok'
        },
        {
          name: 'WinLibs (MinGW)', emoji: '⚙️', desc: 'C/C++ 编译器，解压即用，不用装 VS',
          url: 'https://winlibs.com/', tag: 'free', kind: 'page',
          status: 'unknown'
        }
      ]
    },
    {
      group: '数电 · FPGA · 嵌入式', emoji: '🔌',
      items: [
        {
          name: 'Vivado WebPACK', emoji: '🔲', desc: '数字逻辑 / FPGA 实验主力，需注册账号',
          url: 'https://www.xilinx.com/support/download.html', tag: 'free', kind: 'page',
          status: 'unknown'
        },
        {
          name: 'Quartus Prime Lite', emoji: '🧩', desc: 'Intel FPGA 开发环境，Lite 版免费',
          url: 'https://www.intel.com/content/www/us/en/software/programmable/quartus-prime/download.html',
          tag: 'free', kind: 'page', status: 'unknown'
        },
        {
          name: 'Logisim-Evolution', emoji: '🔌', desc: '数字电路画图与仿真，数电课最常用',
          url: 'https://github.com/logisim-evolution/logisim-evolution/releases',
          tag: 'free', kind: 'page', status: 'unknown',
          icon: 'https://github.com/favicon.ico'
        },
        {
          name: 'STM32CubeIDE', emoji: '🎛️', desc: '单片机 / 嵌入式实验，需配合开发板',
          url: 'https://www.st.com/en/development-tools/stm32cubeide.html',
          tag: 'free', kind: 'page', status: 'unknown'
        },
        {
          name: 'Arduino IDE', emoji: '🤖', desc: '最快上手的单片机环境，插板就能烧',
          url: 'https://www.arduino.cc/en/software', tag: 'free', kind: 'page',
          status: 'ok',
          direct: 'https://downloads.arduino.cc/arduino-ide/arduino-ide_latest_Windows_64bit.exe'
        },
        {
          name: 'Keil MDK', emoji: '🔧', desc: '单片机经典 IDE，正版收费（学校常有授权）',
          url: 'https://www.keil.com/download/product/', tag: 'paid', kind: 'page',
          status: 'unknown'
        }
      ]
    },
    {
      group: '仿真计算 · 信号与系统 / 自控 / 电路', emoji: '📈',
      items: [
        {
          name: 'MATLAB', emoji: '📈', desc: '信号与系统、自控、通信都用它，先查学校正版',
          url: 'https://www.mathworks.cn/downloads/', tag: 'campus', kind: 'page',
          status: 'unknown'
        },
        {
          name: 'GNU Octave', emoji: '🐙', desc: 'MATLAB 免费替代，大部分课程代码能直接跑',
          url: 'https://octave.org/download', tag: 'free', kind: 'page',
          status: 'unknown'
        },
        {
          name: 'Scilab', emoji: '🧮', desc: '免费科学计算 / 控制系统仿真',
          url: 'https://www.scilab.org/download', tag: 'free', kind: 'page',
          status: 'ok'
        },
        {
          name: 'LTspice', emoji: '⚡', desc: '电路 / 模电仿真，免费、体积小、跑得快',
          url: 'https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html',
          tag: 'free', kind: 'page', status: 'unknown'
        },
        {
          name: 'Multisim', emoji: '🔋', desc: '电路仿真教学版，学校机房 / 正版渠道',
          url: 'https://www.ni.com/en/support/downloads/software-products/download.multisim.html',
          tag: 'campus', kind: 'page', status: 'unknown'
        },
        {
          name: 'PSpice', emoji: '🌊', desc: '模电仿真，Cadence 学生版',
          url: 'https://www.cadence.com/en_US/home/tools/system-analysis/pspice-simulation-modeling.html',
          tag: 'campus', kind: 'page', status: 'unknown'
        }
      ]
    },
    {
      group: '机器学习 · 深度学习框架', emoji: '🤖',
      items: [
        {
          name: 'PyTorch', emoji: '🔥', desc: '深度学习主流框架，选好 CUDA 版本再复制命令',
          url: 'https://pytorch.org/get-started/locally/', tag: 'free', kind: 'page',
          status: 'unknown'
        },
        {
          name: 'CUDA Toolkit', emoji: '🎮', desc: '有 N 卡想本地训练时必装',
          url: 'https://developer.nvidia.com/cuda-downloads', tag: 'free', kind: 'page',
          status: 'unknown'
        }
      ]
    },
    {
      group: '在线 AI · 网页直接对话', emoji: '💬',
      items: [
        {
          name: 'DeepSeek', emoji: '🐋', desc: '国内直连、免费，写代码查资料都够用',
          url: 'https://chat.deepseek.com/', tag: 'free', status: 'ok'
        },
        {
          name: '豆包', emoji: '🫘', desc: '字节出品，国内直连，能传文件、读长文档',
          url: 'https://www.doubao.com/chat/', tag: 'free', status: 'ok'
        }
      ]
    },
    {
      group: 'Agent 工具 · 安装地址', emoji: '🧰',
      items: [
        {
          name: 'DSH · DeepSeek Harness', emoji: '🧭', desc: '装好 Node 后 npx @deepseek-ai/dsh web',
          url: 'https://www.deepseek.com/harness/', tag: 'free', kind: 'page',
          status: 'ok'
        },
        {
          name: 'WorkBuddy', emoji: '🧑‍💻', desc: '腾讯的 AI 办公 Agent，桌面端直接装',
          url: 'https://www.workbuddy.cn/', tag: 'free', kind: 'page',
          status: 'unknown'
        },
        {
          name: 'Codex CLI', emoji: '⚡', desc: 'npm i -g @openai/codex，要 ChatGPT 账号或 API',
          url: 'https://github.com/openai/codex', tag: 'free', kind: 'page',
          status: 'ok', icon: 'https://github.com/favicon.ico'
        },
        {
          name: 'OpenCode', emoji: '🟦', desc: '开源终端 Agent，npm i -g opencode-ai，自带免费模型',
          url: 'https://opencode.ai/', tag: 'free', kind: 'page',
          status: 'ok'
        }
      ]
    },
    {
      group: '学习资源', emoji: '🎓',
      items: [
        {
          name: '中国大学 MOOC', emoji: '🎓', desc: '国内高校慕课，专业课补课首选，免费旁听',
          url: 'https://www.icourse163.org/', tag: 'free', status: 'ok'
        },
        {
          name: '学堂在线', emoji: '🏫', desc: '清华发起，计算机 / 工科课程较全',
          url: 'https://www.xuetangx.com/', tag: 'free', status: 'ok'
        },
        {
          name: '哔哩哔哩', emoji: '📺', desc: '实验演示、课程录播最多，搜课名就有',
          url: 'https://www.bilibili.com/', tag: 'free', status: 'ok'
        },
        {
          name: '菜鸟教程', emoji: '📘', desc: 'C / Python / 数据结构语法速查',
          url: 'https://www.runoob.com/', tag: 'free', status: 'ok'
        },
        {
          name: '清华 TUNA 镜像', emoji: '🪞', desc: 'pip / conda 换源，装库快很多',
          url: 'https://mirrors.tuna.tsinghua.edu.cn/', tag: 'free', status: 'unknown'
        },
        {
          name: 'Stack Overflow', emoji: '💬', desc: '英文报错求助，粘错误信息基本有答案',
          url: 'https://stackoverflow.com/', tag: 'free', status: 'unknown'
        }
      ]
    },
    {
      group: '学校网站', emoji: '🏫',
      items: [
        {
          name: '教务系统', emoji: '📋', desc: '选课、成绩、培养方案查询',
          url: 'https://jw.ustc.edu.cn/', tag: 'free', status: 'ok'
        },
        {
          name: '教务处', emoji: '📢', desc: '教学通知、转专业与培养方案文件',
          url: 'https://jwc.ustc.edu.cn/', tag: 'free', status: 'unknown'
        },
        {
          name: '图书馆', emoji: '📚', desc: '数据库、电子书、正版软件入口',
          url: 'https://lib.ustc.edu.cn/', tag: 'free', status: 'ok'
        },
        {
          name: '校园邮箱', emoji: '✉️', desc: '校内通知、课程邮件，注册学生版常用',
          url: 'https://mail.ustc.edu.cn/', tag: 'free', status: 'ok'
        },
        {
          name: '信息门户', emoji: '🏛️', desc: '一网通办总入口，各系统都从这里进',
          url: 'https://i.ustc.edu.cn/', tag: 'free', status: 'ok'
        },
        {
          name: '本科招生网', emoji: '🎯', desc: '专业介绍、培养方案、招生政策',
          url: 'https://zsb.ustc.edu.cn/', tag: 'free', status: 'ok'
        },
        {
          name: '一〇七算力平台', emoji: '🚀', desc: '本科生 GPU 算力，跑训练 / 大模型',
          url: 'https://107.ustc.edu.cn/', tag: 'free', status: 'unknown'
        }
      ]
    }
  ],

  /* ================= 国外网站 ================= */
  abroad: [
    {
      group: '在线 AI · 网页直接对话', emoji: '💬',
      items: [
        {
          name: 'ChatGPT（GPT）', emoji: '🌊', desc: 'OpenAI 的网页对话，GPT 系列都在这里',
          url: 'https://chatgpt.com/', tag: 'free', status: 'unknown'
        },
        {
          name: 'Gemini', emoji: '✨', desc: 'Google 的对话助手，网页版直接聊',
          url: 'https://gemini.google.com/', tag: 'free', status: 'unknown'
        },
        {
          name: 'Claude', emoji: '🧡', desc: 'Anthropic 出品，长文档和写代码强',
          url: 'https://claude.ai/', tag: 'free', status: 'unknown'
        },
        {
          name: 'Perplexity', emoji: '🔍', desc: '带引用来源的搜索型 AI，查资料好使',
          url: 'https://www.perplexity.ai/', tag: 'free', status: 'unknown'
        },
        {
          name: 'NotebookLM', emoji: '📓', desc: 'Google 的文档问答，喂 PDF 出摘要和播客',
          url: 'https://notebooklm.google.com/', tag: 'free', status: 'unknown'
        }
      ]
    },
    {
      group: '开源社区 · 代码托管', emoji: '🐙',
      items: [
        {
          name: 'GitHub', emoji: '🐙', desc: '开源代码、实验工程模板；国内时快时慢，常要加速',
          url: 'https://github.com/', tag: 'free', status: 'unknown'
        }
      ]
    },
    {
      group: 'AI 平台 · 模型仓库', emoji: '☁️',
      items: [
        {
          name: 'Google Colab', emoji: '☁️', desc: '免费 GPU 跑深度学习，不用本地显卡',
          url: 'https://colab.research.google.com/', tag: 'free', status: 'unknown'
        },
        {
          name: 'Hugging Face', emoji: '🤗', desc: '模型 / 数据集仓库，大模型作业常用',
          url: 'https://huggingface.co/', tag: 'free', status: 'unknown'
        }
      ]
    },
    {
      group: '机器学习 · 深度学习框架', emoji: '🤖',
      items: [
        {
          name: 'TensorFlow', emoji: '🧠', desc: '另一主流框架，课程里常和 Keras 一起用',
          url: 'https://www.tensorflow.org/install', tag: 'free', kind: 'page',
          status: 'unknown'
        }
      ]
    }
  ]
};
