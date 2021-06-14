---
lang: zh-CN
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-配置
  - name: keywords
    content: vuepress,最新技术文档,vuepress配置文件
---

# 配置

## 配置文件

VuePress 使用 markdown-it 来渲染 Markdown，大多数的拓展也都是通过自定义的插件实现的。可以通过 `.vuepress/config.js` 的 markdown 选项，来对当前的 markdown-it 实例做一些自定义的配置。

``` js
module.exports = {
    base: '/', // 部署站点的基础路径
    title: 'undefined',
    description: 'undefined',
    head: [ // 添加链接 pwa 的 manifest 增加一个自定义的 favicon
        ['link', { rel: 'icon', href: '/logo.jpg' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    host: '0.0.0.0', // 主机名
    port: 3009, // 端口号
    dest: '.vuepress/dist', // 指定 vuepress build 的输出目录
    ga: 'undefined', // 提供一个 Google Analytics ID 来使 GA 生效
    serviceWorker: false, // pwa

    locales: { // 多语言区分
        '/': {
            title: '前端一锅煮',
            description: '这是一个用vuepress构建的用于前端学习、笔记记录、经典文章推荐的个人博客网站',
        }
    },

    theme: 'undefined',
    themeConfig: { // 默认主题配置
        repo: 'https://gitee.com/cjm0/vuepress',
        editLinks: true,
        repoLabel: '码云gitee',
        docsDir: 'docs', // 假如文档不是放在仓库的根目录下
        locales: {
            '/': {
                docsBranch: 'master', // 假如文档放在一个特定的分支下
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
                nav: [ // 顶部导航栏
                    {
                        text: '文章列表', 
                        link: '/page/list/'
                    },
                    {
                        text: 'test', 
                        link: '/page/test/'
                    },
                    {
                        text: 'vuepress笔记', 
                        link: '/page/vuepress/'
                    },
                    {
                        text: '关于网站', 
                        link: '/page/about/'
                    },
                ],
                sidebar: { // 文档侧边栏 跳转到不同页面
                    '/page/vuepress/':  genSidebarConfig('vuepress笔记')
                }
            }
        }
    },
    markdown: {
        anchor: { permalink: false }, // markdown-it-anchor 的选项
        toc: { includeLevel: [2, 3] }, // markdown-it-toc 的选项
        lineNumbers: 'undefined', // 是否在每个代码块的左侧显示行号 -> true
        externalLinks: { // 这个键值对将会作为特性被增加到是外部链接的 <a> 标签上，默认的选项将会在新窗口中打开一个该外部链接
            target: '_blank', 
            rel: 'noopener noreferrer'
        },
        config: md => {
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it-xxx'))
        }
    },
    postcss: { // 可以修改内部 webpack 配置
        plugins: [require('autoprefixer')] 
    }
}

function genSidebarConfig (title) {
    return [
        {
            title,
            collapsable: false, // 让一个组永远都是展开状态
            children: [
                '',
                'api',
                'config',
                'theme'
           ]
        }
    ]
}
```



