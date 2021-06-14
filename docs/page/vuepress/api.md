---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 语法

## Markdown 语法

::: warning 注意
Markdown 的语法经过 Vuepress 处理后，有部分不支持，少部分有差异，大体是一致的。
支持各种嵌套，支持写 Vue 代码。
[部分参考](https://www.jianshu.com/p/b03a8d7b1719#fn1)
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

### 片段引用

单行引用

``` md
> 过一个平凡无趣的人生实在太容易了
```

> 过一个平凡无趣的人生实在太容易了

多行引用

``` md
> 过一个平凡无趣的人生实在太容易了   
过一个平凡无趣的人生实在太容易了
```

> 过一个平凡无趣的人生实在太容易了   
过一个平凡无趣的人生实在太容易了

多层嵌套

``` md
> 11111111111111111  
>> 222222222222222222  
>>> 3333333333333333333 
```

> 11111111111111111  
>> 222222222222222222  
>>> 3333333333333333333  

### 图片链接

``` md
![网络图片](https://500px.com/photo/276067085/foggy-mountain-by-tiger-seo)
![本地图片 img 文件夹](../img/logo.png)
![本地图片 public 文件夹](/logo.png)
```

### 跳转链接

``` md
[外链跳转](http://blog.bigqianduan.top)
[本地根路由](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading anchor](/foo/#heading) <!-- 跳转到 foo/index.html 的特定 anchor 位置 -->
[foo - one](/foo/one.html) <!-- 具体文件可以使用 .html 结尾 -->
[foo - two](/foo/two.md) <!-- 也可以用 .md -->
```

### 代码

单行代码

``` md
`page/list/`
```

`page/list/`


多行代码

``` md
    ``` html | css | js | md | bash | json | yaml
        var a = 10
    ```
```

``` js
    var a = 10
```

### 表格

多余空格会被忽略。

默认标题栏居中对齐，内容居左对齐。

-:表示内容和标题栏居右对齐，:-表示内容和标题栏居左对齐，:-:表示内容和标题栏居中对齐。


``` md
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


### 内嵌代码  

``` html 
<kbd>Ctrl</kbd> // 键盘
<em style="margin:0 20px>三生三世</em> // 斜体
<strong>三生三世</strong> // 强调加粗
```
<template>
    <kbd>Ctrl</kbd>
    <em style="margin:0 20px">三生三世</em>
    <strong>三生三世</strong> 
</template>

### 目录

会显示当前页面对应结构目录，目录的渲染可以通过 [`markdown.toc`](https://vuepress.vuejs.org/zh/config/#markdown-toc) 选项来配置。 

```
[[toc]]
```

[[toc]]


## Vuepress 语法

### 头部插入

``` yaml
---
lang: zh-CN // 使用中文时间
editLink: false // 禁用指定页面的编辑链接
sidebar: auto // 自动生成侧栏
sidebar: false // 禁用侧边栏
sidebarDepth: 2 // 侧边栏展开深度
pageClass: custom-page-class // 自定义页面类
layout: SpecialLayout // 使用一个完全自定义的组件来代替当前的页面（而只保留导航栏）
home: true // 使用默认主题提供的首页布局
heroImage: /hero.png
actionText: 快速上手 →
actionLink: /zh/guide/
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---
```

### 提示

``` md
::: tip
This is a tip
:::

::: tip 提示
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

::: tip
This is a tip
:::

::: tip 提示
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

### 代码块中的行高亮

``` md
    ``` js{1}
        export default {
            data () {
                return {
                    msg: 'Highlighted!'
                }
            }
        }
    ```
```  


``` js{1}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### 使用组件

所有在 `.vuepress/components` 中找到的 `*.vue` 文件将会自动地被注册为全局的异步组件，如：  

```
.
|_ .vuepress
   |_ components
      |- v-temp.vue
      |- v-tab 
        |- item.vue
```

你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）：  

``` md
<v-temp/>
<v-tab-item/>
```

### 使用 vue

确保在 `beforeMount` 或者 `mounted` 访问浏览器 / DOM 的 API。

如果你正在使用，或者需要展示一个对于 SSR 不怎么友好的组件（比如包含了自定义指令），你可以将它们包裹在内置的 `<ClientOnly>` 组件中：

``` md
<ClientOnly>
    <NonSSRFriendlyComponent/>
</ClientOnly>

```

`<Content>` 组件会把页面中写的 Markdown 代码都包含进去

``` md
<template>
    <div>
        <p></p>
        <Content></Content>
    </div>
</template>
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
| markdown-it-container | 用于创建自定义的块级容器 |
| markdown-it-emoji | 渲染 emoji |
| markdown-it-table-of-contents | 自动生成目录 |






