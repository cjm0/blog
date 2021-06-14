---
lang: zh-CN
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档 
  - name: keywords
    content: vuepress,最新技术文档
---

# 创建项目

## 前言

VuePress 由两部分组成：一部分是支持用 Vue 开发主题的极简静态网站生成器，另一个部分是为书写技术文档而优化的默认主题（.md 文件）。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

一个 VuePress 网站是一个由 [Vue](http://vuejs.org/)、[Vue Router](https://github.com/vuejs/vue-router) 和 [webpack](http://webpack.js.org/) 驱动的单页应用。可以使用 Vue DevTools 去调试你的自定义主题。

在构建时，会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。

[Vuepress 官方文档](https://vuepress.vuejs.org/zh/)

[github](https://github.com/vuejs/vuepress)

## 快速开始

`yarn` 常用命令

``` bash
yarn init // 初始化得到一个 package.json 文件
yarn add // 添加新包
yarn remove // 删除包
yarn upgrade // 更新包
yarn // 下载包，等同于 yarn install
```

打开终端输入以下命令

``` bash
mkdir vuepress
cd vuepress
yarn init
yarn add -D vuepress
mkdir docs 
cd docs 
touch README.md
yarn dev 
```

::: warning 注意
如果你的现有项目依赖了 webpack 3.x，推荐使用 [Yarn](https://yarnpkg.com/en/) 而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。Node.js 版本 >= 8
:::

接着，在 `package.json` 里加一些脚本:

``` json
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs"
},
```

## 项目结构

```
.
|- package.json
|- .gitignore
|- docs
    |- README.md
    |- .vuepress
        |- config.js
        |- enhanceApp.js 
        |- public (dir)
    |- page 
        |- img (dir)
        |- about
            |- README.md
        |- vuepress 
            |- README.md 
            |- config.md
            |- theme.md
```

1. 添加 `.gitignore` 文件，用于提交代码到仓库时排除指定内容
2. 所有内容放在自己创建的 docs 目录
3. docs 里面的 `README.md` 文件为项目首页
4. 创建一个 `.vuepress` 文件，里面放各种配置文件
5. public 文件

`.vuepress/public` 文件里面的内容会被复制到生成的静态文件夹中，一般放 favicons 和 PWA 的图标。引用 public 里面资源的方法如下：

``` md
---
heroImage: /logo.jpg 
---
或
![logo](/logo.jpg)
``` 

6. img 文件

`page/img` 文件夹存放页面所有图片资源，使用相对路径来引用：

``` md
![img](../img/logo.jpg)
```

7. 基础路径

如果你的网站会被部署到一个**非根路径**，你将需要在 `.vuepress/config.js` 中设置 `base`。比如 `http://blog.bigqianduan.top/bar/`，那么 `base` 的值就应该被设置为 `"/bar/"` (应当总是以斜杠开始，并以斜杠结束)。

此时引用 public 文件夹资源路径：`/bar/logo.jpg`。或者使用 VuePress 内置的一个方法 `$withBase` （它被注入到了 Vue 的原型上）：

``` md
![logo]($withBase('/wx.png'))
```

`base` 路径一旦被设置，它将会自动地作为前缀插入到 `.vuepress/config.js` 中所有以 `/` 开始的资源路径中。







  
 
  
  
 
 






