---
description: 个人总结的vuepress学习技术文档-主题
head:
  - - meta
    - name: keywords
      content: vuepress,最新技术文档,vuepress主题
---

# 主题

## 默认主题

### 首页

默认的主题提供了一个首页（Homepage）的布局 (用于 [这个网站的主页](/))。想要使用它，需要在你的根级 `README.md` 的 `YAML front matter` 指定 `home: true`。以下是这个网站实际使用的数据：

```md
---
home: true
heroImage: /img/user.jpeg
heroImageDark: /img/user.jpeg
pageClass: page_home

head:
  - - meta
    - name: keywords
      content: 前端一锅煮,前端学习,前端笔记

footer: 京ICP备18039352号 | ©2018-present 前端一锅煮

actions:
  - text: 先睹为快 →
    link: /page/list/
    type: primary
  - text: 项目简介
    link: /page/about/
    type: secondary
---
```

任何 `YAML front matter` 之后额外的内容将会以普通的 markdown 被渲染，并插入到 `features` 的后面。

### 导航栏

导航栏可能包含你的页面标题、搜索框、 导航栏链接、多语言切换、仓库链接，它们均取决于你的配置。