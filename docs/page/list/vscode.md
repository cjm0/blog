---
lang: zh-CN
sidebar: auto
meta:
  - name: description
    content: vscode 使用指南
  - name: keywords
    content: vscode,使用指南
---

# VS Code 使用指南

## 官方地址

[官方文档和下载](https://code.visualstudio.com/docs/editor/debugging)

## 汉化

`command+shift+p -> configure language -> Configure Display Language -> zh-cn`

## 颜色主题

使用默认的 `Monokai` 主题

## 图标主题

使用默认的 `vscode-icons` 插件图标

## 快捷键

`command 1 2 3` 分屏
`command b` 侧边栏显隐
`command k v` markdown 打开侧边预览
`command shift k` 删除当前行
`command /` 单行注释
`command option m` JSON 解压缩
`command + K + J` 新建一个及试运行的 js 文件

`option shift a` 多行注释
`option shift f` 格式化代码
`option shift ↑ ↓` 复制当前行
`option m` JSON 压缩

`control ~` 终端显隐
`control command space` 唤出表情、常用字符
`control option n` 运行代码

## 代码片段

首选项 -> 用户代码片段 -> 新建全局代码片段

## 插件

### 1.TODO Tree
这个扩展可以快速搜索（使用ripgrep）您的工作区中的TODO和FIXME等注释标记，并在浏览器窗格的树状视图中显示它们。在树中单击一个TODO将打开该文件，并将光标放在包含该TODO的行上。

### 2.Debugger for Chrome
从vscode调试在Google Chrome中运行的JavaScript代码。用于在Google Chrome浏览器或支持Chrome DevTools协议的其他目标中调试JavaScript代码的vscode扩展。

### 3.vscode-iocns
图标插件

### 4.Chinese Language Pack for VS Code
中文包

### 6.filesize
在状态栏中显示当前文件大小，点击后还可以看到详细创建、修改时间

### 7.Import Cost
对引入的计算大小

### 8.Path Intellisense
自动填充文件名

### 9.Auto Rename Tag
自动完成另一侧标签的同步修改

### 10.Code Runner
运行代码

### 11.EditorConfig for VS Code
覆盖 vscode 配置

### 12.Image preview
在空白处和悬停时显示图像预览

### 13.koroFileHeader
在 vscode 中用于生成文件头部注释和函数注释的插件

### 14.Apollo GraphQL
Apollo GraphQL 高亮

### 15.vetur   　　
vue 语法高亮、智能感知、Emmet等

### 16.HTML Snippets
完整的HTML代码提示，包括HTML5

### 17.JavaScript(ES6) code snippets
ES6语法智能提示，以及快速输入，不仅仅支持.js，还支持.ts，.jsx，.tsx，.html，.vue，省去了配置其支持各种包含js代码文件的时间。

### 18.ESLint
检查 javascript 语法错误与提示

### 19.npm
使用 package.json 验证已安装的软件包。确保已安装的软件包版本号正确，高亮显示 package.json 中缺少的已安装软件包以及尚未安装的软件包。

### 20.View Node Package
使用此扩展快速查看 Node 包源，允许您直接从 vscode 打开 Node 包仓库库/文档。

### 21.Prettier-Code formatter
格式化代码工具

### 22.Prettify JSON
格式化 json

### 23.JSON Tools
JSON 格式化工具，`command option m` 解压缩，`option m` 压缩

### 24.JSON Viewer
JSON 查看

### 25.Minify
压缩当前 HTML、CSS、JS 生成 .min文件

### 26.open in browser
在浏览器打开文件

### 27.Docker
docker

### Settings Sync x
使用GitHub Gist同步多台计算机上的设置，代码段，主题，文件图标，启动，键绑定，工作区和扩展。

### Faker x
用流行的 JavaScript 库 – Faker，能够帮你快速的插入用例数据。Faker 可以随机生成姓名、地址、图像、电话号码，或者经典的乱数假文段落，并且每个类别还包含了各种子类别，你可以根据自身的需求来使用这些数据。

### wakatime x
可以帮助我们记录每一个项目下所用的时间，绑定账号后每周会给你发一份邮件，提示你在不同的编辑器、项目和操作系统下花了多长时间。

### quokka x
一个调试工具插件，能够根据你正在编写的代码提供实时反馈。它易于配置，并能够预览变量的函数和计算值结果。另外，在使用 JSX 或 TypeScript 项目中，它能够开箱即用。`command + K + J`

### GitLens x
增强了 Visual Studio Code 中内置的 Git 功能。例如 commits 搜索，历史记录和和查看代码作者身份，还能通过强大的比较命令获得有价值的见解等等。