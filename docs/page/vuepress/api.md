---
sidebarDepth: 2
description: '个人总结的vuepress学习技术文档-语法'
head:
  - - meta
    - name: keywords
      content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 语法

## Markdown 语法

::: tip 提示
VuePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现语法扩展。
:::

<!-- more -->

### 常用语法

``` md
# ~ #######  标题

- a          无序列表
1. a         有序列表

*a*          斜体
**a**        粗体
***a***      粗体 + 斜体
~~a~~        删除线

***          分割线
行尾添加两个空格加回车表示换行
```

- 无序列表
- 无序列表
- 无序列表

1. 有序列表
2. 有序列表
3. 有序列表

*斜体*

**粗体**

***粗体+斜体***

~~删除线~~      

***

### 片段引用

``` md
> 单行引用
```

> 单行引用

``` md
> 多行引用
多行引用
```

> 多行引用
多行引用


``` md
> 多层嵌套
>> 多层嵌套
>>> 多层嵌套
```

> 多层嵌套
>> 多层嵌套
>>> 多层嵌套

### 跳转链接

``` md
[外链跳转](http://blog.bigqianduan.top)
[本地根路由](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading anchor](/foo/#heading) <!-- 跳转到 foo/index.html 的特定 anchor 位置 -->
[foo - one](/foo/one.html) <!-- 具体文件可以使用 .html 结尾 -->
[foo - two](/foo/two.md) <!-- 也可以用 .md -->
```

### 图片链接

``` md
![网络图片](https://500px.com/photo/276067085/foggy-mountain-by-tiger-seo)
![本地图片 img 文件夹](../img/logo.png)
![本地图片 public 文件夹](/logo.png)
```

### Emoji 🎉

你可以在你的 Markdown 内容中输入 `:EMOJICODE:` 来添加 Emoji 表情。

前往 [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet) 来查看所有可用的 Emoji 表情和对应代码。

```
VuePress 2 已经发布 :tada: ！
```

VuePress 2 已经发布 🎉 ！

### 代码

**单行代码**

``` md
`page/list/`
```

`page/list/`

**行高亮**

````md
```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
````

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

**行号**

````md
```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````

```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

### Markdown 中使用 HTML

``` html
<kbd>Ctrl</kbd> // 键盘
<em style="margin:0 20px>三生三世</em> // 斜体
<strong>三生三世</strong> // 强调加粗
```

<kbd>Ctrl</kbd>
<em style="margin:0 20px">三生三世</em>
<strong>三生三世</strong>

### 表格

多余空格会被忽略。

默认标题栏居中对齐，内容居左对齐。

-: 表示内容和标题栏居右对齐，:- 表示内容和标题栏居左对齐，:-: 表示内容和标题栏居中对齐。


```md
| ID | 书名 | 作者 |
| -- | -- | -- |
| 1 | 仙逆 | 耳根 |
| 2 | 凡人修仙传 | 忘语 |
| 3 | 遮天 | 辰东 |
```

| ID | 书名 | 作者 |
| -- | :--: | -- |
| 1 | 仙逆 | 耳根 |
| 2 | 凡人修仙传 | 忘语 |
| 3 | 遮天 | 辰东 |

### 目录

如果你想要把当前页面的目录添加到 Markdown 内容中，你可以使用 [[toc]] 语法。配置参考： [markdown.toc](https://vuepress.vuejs.org/zh/reference/config.html#markdown-toc) 选项来配置。

```
[[toc]]
```

[[toc]]

## Vuepress 语法

### 头部插入

**所有页面**

```yaml
---
lang: zh-CN
title: ''
description: ''
head:
  - - meta
    - name: keywords
      content: vuepress,最新技术文档,vuepress语法,markdown语法

navbar: true, // 是否在当前页面展示导航栏
pageClass: custom-page-class // 为当前页面添加额外的类名
---
```

只在**首页**中生效

```yaml
---
home: true // 设定该页面是首页还是普通页面
heroImage: /img/user.jpeg
heroImageDark: /img/user.jpeg

heroAlt: '' // 首页图片的 alt 属性，不设置，则默认使用 heroText
heroText: '' // 首页的大标题，不设置则默认使用站点 title
tagline: '' // 首页的标语，不设置则默认使用站点 description

footer: 京ICP备18039352号 | ©2018-present 前端一锅煮 // 首页页脚
footerHtml: false // 如果设置为 true ，footer 会被作为 HTML 代码处理

actions:
  - text: 快速上手 →
    link: /zh/guide/getting-started.html
    type: primary
  - text: 项目简介
    link: /guide/
    type: secondary

features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue 驱动
    details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
---
```

只在**普通页面**中生效

```yaml
---
editLink: false // 本页面中关闭 *编辑链接*
lastUpdated: false, // 本页面中关闭 *最近更新时间戳*
contributors: false, // 本页面中关闭 *贡献者列表*
sidebar: auto // 配置本页面的侧边栏：auto 自动生成侧栏、false 禁用侧边栏
sidebarDepth: 2 // 侧边栏展开深度
prev: // 上一个页面的链接
  text: Get Started
  link: /guide/getting-started.html
next: // 下一个页面的链接
  text: Get Started
  link: /guide/getting-started.html
---
```

### 提示

``` md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::
```

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

### 使用 Vue 组件

你可以在 Markdown 中直接使用 Vue 组件

``` md
<vHome/>
```

### 内置组件

该组件和它的子元素只会在客户端被渲染

``` md
<ClientOnly>
  <NonSsrFriendlyComponent />
</ClientOnly>
```

该组件会渲染页面的 Markdown 内容

``` md
<Content page-key="v-xxxxxx" />
```

### 网站和页面的元数据

整个网站以及特定页面的元数据将分别暴露为 this.$site 和 this.$page 属性，它们将会被注入到每一个当前应用的组件中。
this.$route 和 this.$router 同样可以使用。

``` md
{{$site}}
{{$page}}
```

### 默认引用的包

| 引用的包 | 用途 |
| -- | -- |
| markdown-it | 渲染 |
| markdown | 基本语法 |
| markdown-it-anchor | 为各级标题添加锚点 |
| markdown-it-emoji | 渲染 emoji |
|  @mdit-vue/plugin-toc | 自动生成目录 |
| back-to-top | 给站点添加一个 ***返回顶部*** 按钮 |
| container | 给站点注册自定义容器 |
| external-link-icon | 给外部链接添加一个图标 |
| medium-zoom | 为图片提供可缩放的功能 |
| nprogress | 在切换页面时会展示进度条 |
| @vuepress/plugin-prismjs@next | Markdown 代码块启用代码高亮 |

