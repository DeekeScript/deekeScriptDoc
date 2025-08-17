import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DeekeScript',
  description: 'DeekeScript是一款基于Android无障碍的自动化脚本开发和打包软件',
  lang: 'zh-CN',
  outDir: '../_book',
  // 如果部署在子目录，请设置base路径，例如：base: '/docs/'
  // base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'DeekeScript,Deeke,按键控制,模拟点击,模拟输入,自动化,脚本,SaaS系统,Android自动化,卡密系统,自动化框架' }],
    ['meta', { name: 'description', content: 'DeekeScript是一款基于Android无障碍的自动化脚本开发和打包软件。通过DeekeScript提供的接口，可以模拟用户操作、控制Android手机的APP（框架）。' }],
    ['link', { rel: 'stylesheet', href: '/main.css' }]
  ],
  markdown: {
    lineNumbers: true,
    // 自定义锚点生成规则
    anchor: {
      slugify: (str) => {
        // 移除图标和特殊字符，只保留中文、英文、数字
        return str
          .replace(/[📝🔍🎛️📱⚙️🚀🔧📱☁️🔒🎯]/g, '') // 移除常见图标
          .replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '') // 只保留中文、英文、数字
          .toLowerCase() // 转换为小写
      }
    }
  },
  ssr: false, 
  // 添加静态导出配置
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      },
      // 增加文件大小限制
      chunkSizeWarningLimit: 1000,
      // 确保大文件被正确处理
      assetsInlineLimit: 0
    },
    // 确保静态资源被正确复制
    publicDir: 'public'
  },
  // 确保静态资源被正确复制
  publicDir: 'public',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'DeekeScript',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/quick/start' },
      { text: 'API文档', link: '/quick/quick' },
      { text: '案例', link: '/deeke/deeke' },
      { text: 'Deeke官网', link: 'https://deeke.cn' }
    ],
    sidebar: [
      {
        text: '介绍',
        collapsed: false,
        items: [
          { text: '认识DeekeScript', link: '/quick/quick' },
          { text: '开发环境说明', link: '/quick/envir' },
          { text: '快速开始', link: '/quick/start' },
          { text: '视频教程', link: '/video/base' }
        ]
      },
      {
        text: '配置',
        collapsed: false,
        items: [
          { text: 'DeekeScript.json', link: '/config/config' },
          { text: '动态配置', link: '/config/dynamics' },
          { text: 'Vscode开发篇', link: '/config/vscode' }
        ]
      },
      {
        text: '基础部分',
        collapsed: false,
        items: [
          { text: 'App', link: '/base/app/app' },
          { text: '系统函数', link: '/base/system/funcs' },
          { text: '设备-Device', link: '/base/device/device' },
          { text: '选择器-UiSelector', link: '/base/uiSelector/uiSelector' },
          { text: '表单', link: '/base/ui/form' },
          { text: '定时器', link: '/base/timer/timer' },
          { text: 'Http', link: '/base/http/http' },
          { text: 'WebSocket', link: '/base/webSocket/webSocket' },
          { text: 'Socket.IO-客户端', link: '/base/socket/client' },
          { text: '控制台-console', link: '/base/console/console' },
          { text: '日志-Log', link: '/base/log/log' },
          { text: '本地存储', link: '/base/storage/storage' },
          { text: '文件系统-Files', link: '/base/files/files' },
          { text: '手势操作', link: '/base/gesture/gesture' },
          { text: '控件操作', link: '/base/uiObject/uiObject' }
        ]
      },
      {
        text: '高级部分',
        collapsed: false,
        items: [
          { text: '弹窗', link: '/advance/dialogs' },
          { text: 'Engines', link: '/advance/engines/engines' },
          { text: '多线程-Thread', link: '/advance/thread' },
          { text: '模块', link: '/advance/module' },
          { text: '异步', link: '/promise/awa' },
          { text: '加解密', link: '/advance/encryption' },
          { text: '图片与颜色', link: '/advance/photoAndColor' },
          { text: '扩展', link: '/advance/extension/extension' },
          { text: '通知', link: '/advance/notification' },
          { text: '前台服务', link: '/advance/foreground' }
        ]
      },
      {
        text: 'Android权限',
        collapsed: false,
        items: [
          { text: '基础权限', link: '/access/access' }
        ]
      },
      {
        text: 'Hook',
        collapsed: false,
        items: [
          { text: 'Hook介绍', link: '/hook/hook' }
        ]
      },
      {
        text: 'Hid模式',
        collapsed: false,
        items: [
          { text: '模式介绍', link: '/hid/hid' },
          { text: '蓝牙Hid硬件介绍', link: '/hid/bluetooth' },
          { text: 'Hid方法', link: '/hid/method' }
        ]
      },
      {
        text: 'DeekeScript输入法',
        collapsed: false,
        items: [
          { text: '输入法设置', link: '/inputMethod/base' },
          { text: '输入法-Keyboards', link: '/inputMethod/method' }
        ]
      },
      {
        text: '后端接口',
        collapsed: false,
        items: [
          { text: '后端接口', link: '/backendApi/activationCode' }
        ]
      },
      {
        text: '代码安全',
        collapsed: false,
        items: [
          { text: '代码混淆加密', link: '/code/encryption' }
        ]
      },
      {
        text: 'Apk打包与云市场',
        collapsed: false,
        items: [
          { text: '在线打包', link: '/apk/apk' },
          { text: '管理后台支持', link: '/backend/backend' }
        ]
      },
      {
        text: '经典案例篇',
        collapsed: false,
        items: [
          { text: 'Deeke APP', link: '/deeke/deeke' }
        ]
      },
      {
        text: '问题篇',
        collapsed: false,
        items: [
          { text: '常见问题', link: '/question/question' },
          { text: '无障碍问题', link: '/question/accessibility' },
          { text: 'Bug提交入口', link: '/question/bug' }
        ]
      },
      {
        text: '其他',
        collapsed: false,
        items: [
          { text: '更新文档', link: '/UPDATE' },
          { text: '招贤纳士', link: '/INVITE' },
          { text: '企业服务', link: '/demo/demo' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DeekeScript' },
      { icon: 'gitee', link: 'https://gitee.com/DeekeScript' }
    ],
    footer: {
      message: 'Released under the ISC License.',
      copyright: 'Copyright © 2025 DeekeScript'
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
}) 