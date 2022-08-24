---
sidebar: auto
description: 前端标准规范-v1.0
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,前端标准规范-v1.0
---

# 前端标准规范-v1.0

总体原则：极简、极快、解耦

主要适用范围：vue 单页项目+

## 文件组织规范

### 文件结构

原则：文件少、层级浅、资源集中、相对独立互不影响

基本结构：
```
.
|_ node_modules
|_ dist
|_ src
    |_ assets // 公共资源
        |_ img // 全局图片
            |- favicon.png
        |- common.js // 全局公用 js
        |- common.less // 重置样式表 + 自定义全局样式
        |- mixin.less // 全局 less 变量
        |- template.html // 模板
    |_ components // 组件
        |_toast
            |- index.vue
            |- index.less
        |- index.js // 所有组件的集合
    |_ pages // 具体页面
        |_ index // 首页
            |- index.vue
            |- index.less
            |- good.png // 少量本页面下独自使用的图片
        |- img // 两个以上页面都用到的图片单独抽离防止
            |- copy.jpg
        |_ temp // 模板
            |- index.vue
            |- index.less
    |_ router // 路由
        |- index.js
    |_ vuex // vuex 插件
        |- index.js
    |- App.vue
    |- main.js
```

说明：

1. 关于图片：少量直接放到本页面文件下（资源集中，互不影响），有两个页面以上公用则抽离放到 img 文件夹下（降低层级），assets 下的 img 主要放 favicon.png、pwa等全局图片（低频资源远离，不分散注意力）

2. assets 目录：放全局资源，此类资源辐射全局，改动频率低，集中在一起，为更好地聚焦核心

3. temp 文件：不用新建页面，直接复制然后改个文件名即可

### 文件命名

文件命名统一使用小写字母，必要的时候可以加中划线 `-`

页面文件名不宜过长，里面的文件统一以 index 为前缀，`index.vue、index.less`

父子组件命名：
```
    |_ button-group // 组件组合
    |_ button // 组件
    |_ cell // 父组件
    |_ cell-item // 子组件
```

## JS 规范

### JS 书写格式

借助 Eslint 以及编辑器的代码格式化功能确保代码格式统一

Eslint 使用 [JavaScript standard 代码规范](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md)

### JS 命名

1. 全部用单引号

2. 统一用驼峰命名法，尽量保持语义化

3. 类名开头大写

4. 合理使用复数、简称、缩写

5. 多写注释，同时保持精炼

## CSS 规范

规则：全部用双引号，小写。每个页面的 css 命名以文件外层文件夹名字加 `_index` 作为开头（所以说一开始文件夹名字不宜过长），统一使用下划线辅助 `_`

比如：
```css
    .about_index{
        .tit{
            font-size: 18px;
        }
        .nav{
            margin-bottom: 20PX;
        }
    }
```

原因：下划线易选中复制，js 中不允许有中划线，js 操作类名夹带中划线互相混在一起，加重记忆负担，容易混淆；文件名称都是不重复的，以文件名作为此页面类名的开头可以确保不会有重复，然后此类名下的命名可与其他页面重复，依靠层级限制类名可重复使用，极大减轻样式命名的工作量

## HTML 规范

1. 增强语义化：尽量使用 h5 新标签

2. 标签嵌套规则，防止诡异错误：`ul、ol` 下嵌套 `li`，`dl` 下嵌套`dt、dd`，`p、dt、h`标签里面不嵌套块元素，`a` 标签不能嵌套 `a`，行内元素不能嵌套块元素

3. 注意 seo 优化：`img、a、strong、em、h1-h3`

4. 格式化标签：`span、em、strong` 格式化成无语义标签，`i` 统一给图标使用

5. 全部用双引号，小写

## 性能优化

### 提交代码前检查

1. 图片

必须加 favicon

有下载需求的图片采用 img 标签实现，无下载需求的图片采用 CSS 背景图实现

ps 中的切图 jpg 品质取非常高(80)，然后用 PPDuck 压图工具做无损压缩

尽量使用 jpg 的图，移动端大张图片不大于 50kb

移动端使用 2x 图

避免空的 src 和 href

2. a 标签 href 如果为空，统一使用 `"javascript:;"` 而非 `"void(0)"`

3. `border-radius: 2px` 值不能为单数，最小为 `2px`

4. 定位元素垂直居中 `top` 值一般写 `45%`，`50%` 看起来会偏下

5. 合理的鼠标光标

6. 节流防抖

7. 类型转换、非空判断

8. 异步请求空白处理机制，比如加载 loading

9. 统一的错误返回处理机制

10. 微信分享标题敏感字，红包、钱...

11. app回退、跳转是否正确 `iOS、android`

12. 适配需要考虑 `320~750 320 480 640 iphoneX` 等

13. 扩大点击区域

### 优化速度

1. 页面首次打开请求接口不可超过3个，过多请求需要整合

2. 控制域名数量，每个页面请求域名一般有3个，一个主域名，一个静态资源域名，一个埋点分析域名（存在资源并行下载数限制的问题）

3. 综合衡量 `css、js` 的请求数量和包大小，超过 150kb 考虑做拆分

4. 后端接口做缓存

5. 静态资源统一部署到 CDN

6. 开启 zip 压缩








