import { defineUserConfig } from 'vuepress'
import { path } from '@vuepress/utils'
const { defaultTheme } = require('@vuepress/theme-default') // 默认主题
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components') // 自动注册组件
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics') // 谷歌分析
const { docsearchPlugin } = require('@vuepress/plugin-docsearch') // 提供搜索功能
const { pwaPlugin } = require('@vuepress/plugin-pwa') // pwa

// 网站地址 blog.bigqianduan.top
let getIp = () => {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}

// const isGitPages = process.argv[process.argv.length - 1] === 'pages';
const isGitPages = true

export default defineUserConfig({
  base: isGitPages ? '/blog/' : '/', // 部署站点的基础路径
  open: false, // 是否在开发服务器启动后打开浏览器
  debug: false, // 是否启用 Debug 模式
  host: 'localhost',
  port: 3009,

  head: [ // 添加链接 pwa 的 manifest 如果需要
    ['link', { rel: 'icon', href: '/logo.jpg' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  locales: { // 默认标题
    '/': {
      lang: 'zh-CN',
      title: '前端一锅煮',
      description: '这是一个基于 VuePress2 构建的用于前端学习、笔记记录、趣文推荐的个人博客网站',
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: '',
    //   description: '',
    // }
  },
  dest: '.vuepress/dist', // 指定 vuepress build 的输出目录
  temp: '.vuepress/.temp', // 指定临时文件目录
  cache: '.vuepress/.cache', // 指定缓存文件目录
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'], // 指定页面文件的 Patterns

  plugins: [
    registerComponentsPlugin({
      // components: {
      //     vHome: path.resolve(__dirname, './components/vHome.vue'),
      // },
      componentsDir: path.resolve(__dirname, './components'),
    }),
    googleAnalyticsPlugin({
      id: 'G-UA-109714208-2',
    }),
    docsearchPlugin({
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
        // '/en/': {
        //   placeholder: 'Search Documentation',
        //   translations: {
        //     button: {
        //       buttonText: 'Search Documentation',
        //     },
        //   },
        // },
      },
    }),
    pwaPlugin({}),
  ],

  // 主题配置
  theme: defaultTheme({ // 默认主题配置
    colorMode: 'auto', // 'auto' | 'light' | 'dark' 默认颜色模式
    colorModeSwitch: true, // 如果设置为 true ，将会在导航栏展示一个切换颜色模式的按钮
    home: '/', // 首页的路径
    logo: 'logo.jpg', // Logo 图片将会显示在导航栏的左端
    logoDark: 'logo.jpg', // null 可以在夜间模式下禁用 Logo，在夜间模式中使用的 Logo 图片的 URL

    repo: 'https://github.com/cjm0/blog.git',
    repoLabel: 'Github', // 仓库链接 的文字

    docsDir: 'docs', // 文档源文件存放在仓库中的目录名
    docsRepo: 'https://github.com/cjm0/blog.git', // 文档源文件的仓库 URL
    docsBranch: 'master', // 文档源文件的仓库分支
    editLinks: true, // 是否启用 编辑此页 链接
    editLinkPattern: ':repo/edit/:branch/:path',

    lastUpdated: true, // 是否启用 最近更新时间戳
    contributors: false, // 是否启用 贡献者列表
    // contributorsText: 'Contributors', // 贡献者列表 标签的文字

    tip: 'TIP', // Tip 自定义容器 的默认标题
    warning: 'WARNING', // Warning 自定义容器 的默认标题
    danger: 'DANGER', // Danger 自定义容器 的默认标题
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        editLinkText: '在 GitHub 上编辑此页', // 编辑此页 链接的文字
        lastUpdatedText: '上次更新', // 最近更新时间戳 标签的文字
        toggleColorMode: '切换颜色模式', // 切换颜色模式按钮的标题文字
        notFound: ['看起来我们进入了错误的链接'], // Not Found - 404 页面的提示信息，会从数组中随机选取一条信息进行展示
        backToHome: '返回首页', // Back to home - 404 页面中 返回首页 链接的文字

        navbar: [ // 顶部导航栏
          {
            text: '首页',
            link: '/'
          },
          {
            text: '全部文章',
            link: '/page/list/'
          },
          {
            text: 'VuePress笔记',
            children: [
                {
                  text: '介绍',
                  link: '/page/vuepress/guide',
                },
                {
                  text: '语法',
                  link: '/page/vuepress/api',
                },
                {
                  text: '配置',
                  link: '/page/vuepress/config',
                },
                {
                  text: '主题',
                  link: '/page/vuepress/theme',
                },
            ],
          },
          {
            text: '关于我',
            link: '/page/about/'
          },
          /* {
            text: '测试',
            children: [
              {
                text: 'Always active',
                link: '/',
                activeMatch: '/', // 该元素将一直处于激活状态
              },
              {
                text: 'Active on /foo/',
                link: '/not-foo/',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
              },
            ],
          } */
        ],
        sidebar: { // 文档侧边栏，跳转到不同页面
          '/page/vuepress/': [
            {
              text: 'VuePress笔记',
              sidebarDepth: 3,
              collapsable: false,
              children: ['guide.md', 'api.md', 'config.md', 'theme.md'],
            },
          ],
        }
      },
      // '/en/': {
      //   selectLanguageName: 'English',
      // }
    }
  })
})