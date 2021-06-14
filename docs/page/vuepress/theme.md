---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-主题
  - name: keywords
    content: vuepress,最新技术文档,vuepress主题
---

# 主题

## 默认主题

### 首页

默认的主题提供了一个首页（Homepage）的布局 (用于 [这个网站的主页](/))。想要使用它，需要在你的根级 `README.md` 的 `YAML front matter` 指定 `home: true`。以下是这个网站实际使用的数据：

``` md
---
home: true
heroImage: /logo.jpg
actionText: 先睹为快 →
actionLink: /page/list/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present 前端一锅煮
meta:
  - name: keywords
    content: 前端一锅煮,前端学习,前端笔记
---
```

任何 `YAML front matter` 之后额外的内容将会以普通的 markdown 被渲染，并插入到 `features` 的后面。

### 导航栏

导航栏可能包含你的页面标题、搜索框、 导航栏链接、多语言切换、仓库链接，它们均取决于你的配置。