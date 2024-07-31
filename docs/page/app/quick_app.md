---
sidebar: auto
description: 快应用开发入门
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,快应用开发入门
---

# 快应用开发入门

- 快应用介绍

- 遇到的问题和解决办法

- 几点开发实践

- 一点感悟

## 快应用介绍

### 介绍

**网页**：网页无需安装，体验不够很好。

**原生应用**：原生应用体验流畅，但需要从应用商店下载安装，难以一步直达用户，而且安装包比较大耗流量。

**快应用**：深度集成在手机操作系统中，用户无需下载安装直接在手机上运行，可流畅的体验应用内容。

类似微信小程序，微信小程序嵌套在微信 app 里面，快应用嵌套在手机系统里面。

入口比较全，包括：URL 链接、全局搜索、应用商店、浏览器、负一屏、系统桌面、PUSH、语音助手、安全中心、垃圾清理、信息助手、天气、短信模板、日历、个性主题、文件管理...

### 开发技术

快应用采用前端技术栈，由基本的标签、样式、js脚本等组成，与 Vue 的开发方式相近。

快应用使用 MVVM 的设计模式进行开发，开发者无需直接操作 DOM 节点的增删，利用数据驱动的方式完成节点更新。

开发实时编译渲染，完成后打包生成 rpk 包上传平台。

### 快速开始

1. [安装快应用开发工具](https://www.quickapp.cn/docCenter/IDEPublicity)

2. 新建快应用工程
![](https://pic1.zhimg.com/80/v2-c8b6b4dece86e22b9ce3353b27df6ca8_1440w.jpg)

3. 代码结构
![](https://pic4.zhimg.com/80/v2-8787304f0c972efb97fd9be37cf40e4f_1440w.jpg)

4. 开发调试
![](https://pic4.zhimg.com/80/v2-e78947dedf8b3f5bda37f62dc44376ef_1440w.jpg)

5. 编译打包提交测试
![](https://pic2.zhimg.com/80/v2-005c60809d05fc8f5399b69a3a406781_1440w.jpg)

6. 上传至官网的开发者中心，提交审核发布

## 遇到的问题和解决办法

### 缺点

真实开发体验感受到的问题：

- 开发工具属于简易版的 VS Code，容易卡顿，偶尔会出现诡异的问题

- api 未全部统一，各家厂商都有部分私有的api和功能

- 官方文档不全，不够详细

- 更新迭代慢，基础功能够用，更细节的功能不够全

- 社区不繁荣，较少更新维护

- 应用量和开发者较少导致文档和相关资料少，遇到问题很难找到可借鉴的解决方案

### 遇到的问题和解决办法

**1. 开发工具运行卡顿**

现象：长时间运行快应用开发工具会变卡顿。

解决：可以退出杀死快应用开发工具，然后重新打开。

**2. 开发工具运行报错**

现象：初次安装报错，开发过程报错，偶发编译报错。

解决：查看右侧预览报错信息 => 查看底部输出的报错信息 => onError 监听 => 代码二分法排查 => 重启开发工具 => 重启电脑

说明：

- 常规明显的错误右侧预览会提示

- 组件内部报错整个组件会渲染失败，可查看调试器输出查问题

- `onError` 全局监听，用 `prompt.showDialog` 弹出全局报错

- 异常页面通过二分法依次对半隐藏代码找到错误

- 未发现异常或者 `$app`、`$def`、自定义的 `$config` 不存在报错，清除缓存重新编译，不行再重启开发工具，再不行重启电脑

**3. 生命周期函数执行问题**

页面执行顺序 `onInit => onReady => onShow`

自定义组件只有 `onInit => onReady`

现象：加载过一次的页面返回再进入只会执行 `onShow`，此时页面中自定义组件生命周期函数不会执行。

解决：加上 `if` 并在页面 `onShow` 中修改为 false，100ms 后为改为 true，强制子组件刷新。

**4. 定位不支持 `z-index` 控制层级**

现象：`z-index` 无效，多个 `position` 定位元素互相覆盖时，谁后面渲染谁就在上层。

解决：用 `stack` 组件替代，`stack` 容器子组件排列方式为层叠排列，每个直接子组件按照先后顺序依次堆叠，覆盖前一个子组件；用代码逻辑控制要显示在最上层的最后去渲染。

**5. 私有自动登录 api 导致预览无法使用**

现象：使用了 oppo 私有的自动登录 api，模块不存在报错导致开发者工具右侧预览失败，无法实时开发调试。

解决：封装登录方法，引入参数控制调试阶段用写死的登录 token，不走私有登录 api。

**6. 页面栈过多数据被销毁**

现象：阅读页和详情页因为 id 不一样每次都会产生新的页面栈，页面栈的数量超过 5个，缓存在内存里的最早页面数据会被销毁，一般表现就是首页会变空白，因为最先进的是首页。

解决：阅读页和详情页这种带 id 的页面用 `router.replace` 替换 `router.push`；监听页面栈数量超过 5个记录一下，在回到首页的时候重新加载数据。

**7. 计时器问题**

现象：计时器内函数执行报错 `this` 找不到，A页面跳转到B，后台继续监听A页面计时器，到点执行计时器，此时A页面已被销毁，报错。

解决：给 `Function` 增加 `bindPage` 方法，在 `bindPage` 里面判断页面存在才执行函数，所有计时器都用以下方法：

```js
const bindPageLC = () => {
  Function.prototype.bindPage = function (vmInst) {
    const fn = this
    return function () {
      if (!vmInst) {
        throw new Error('使用错误：请传递VM对象')
      }
      if (vmInst.$valid) {
        return fn.apply(vmInst, arguments)
      } else {
        console.error('页面销毁时，不执行回调函数')
      }
    }
  }
}
bindPageLC()

setTimeout(function() {

}.bindPage(this), 500)
```

**8. 系统字体设置变化导致内容错位**

现象：手动修改系统字体大小，未做适配导致页面错位，目前未提供相关 api 能监听到系统字体大小变化导致。

解决：`manifest.json` 关闭字体大小响应 `"textSizeAdjust": "none"`。

**9. 系统显示设置变化导致内容错位**

现象：手动修改系统显示大小，使用富文本容器内嵌html元素的会变大错位。`"textSizeAdjust": "none"` 只能关闭不响应系统字体变化。

解决：不使用富文本容器内嵌 html，改用 `div`、`text` 等组件。

**10. 屏幕适配**

快应用和负一屏卡片默认尺寸都是 `"designWidth": 750`，使用 750 的设计图可 1:1 写样式；

如果 `"designWidth": 1080`，375 的图需要乘以 3，可以在公共样式里定义变量，`@3:3px;`；

具体使用则：`height: 156*@3;padding: 16*@3 16*@3 0;`。

**11. 夜间适配**

现象：监听夜间模式然后变换最外层样式去更换颜色，发现不起作用，需要每个元素都单独换样式才有效。

解决：快应用可以夜间媒体查询适配 `@media (prefers-color-scheme: dark) {}`。

`manifest.json` 中 `"themeMode": -1,` 跟随主题色，`"forceDark": true,` 开启反色

图片暗夜 src 替换：监听主题模式切换 `onConfigurationChanged`，获取当前的主题模式 `configuration.getThemeMode()`

组件单独关闭反色：`forcedark="false"`

自定义样式：用媒体查询适配 `@media (prefers-color-scheme: dark) {}`

**12. 阅读页竖翻模式 1.0 广告问题**

现象：多个广告组件 `for` 循环，绑定 `appear` 触发加载，每个组件会多次触发 `appear` 事件；广告组件`onLoad`回调会触发多次。

解决：加索引缓存过滤掉已加载过的组件；广告对象抽离到外部共同引用，传数据到广告组件里面去渲染数据，做数据缓存过滤。

**13. 2.0 原生广告注意点**

加载：最外层通过 `if` 重新渲染加载新广告

成功：返回的数据不再有广告 id

点击：广告曝光和点击只会触发1次，再次点击不会触发广告点击上报，无收益；触发广告跳转区域不能用 `if` 控制，否则点击无任何反应，用 `show` 控制

关闭：自定义关闭广告元素用 `show`，不用 `if`，这样就不会跳转到广告链接

**14. 安全审核问题**

`loglevel` 需设置为 `off`；

未同意隐私协议前存在联网行为：所有请求在同意协议后再发；

不允许存在 `http` 链接：对接口下发的链接全部转换成 `https`，接口链接支持 `http` 和 `https`，部分下发的还是 `http`；

代码中不允许存在硬编码 `IP`：可拼接使用；

`storage` 不允许明文储存敏感信息，比如昵称、手机号等：可用 `cipher.aes()` 加密储存。

## 几点开发实践

### 平台版本

快应用覆盖式更新，平台版本可升级到 1100 最新版

### 错误处理

1. JSON.parse 解析报错处理

```js
const parseJSON = () => {
  const rawParse = JSON.parse
  JSON.parse = (str, defaults) => {
    try {
      return rawParse(str)
    } catch (err) {
      console.error(`JSON 解析失败：${str}, ${err.stack}`)
      return defaults
    }
  }
}
```

2. 通过 $valid 判断页面状态，解决回调函数中引用 this 数据报错

```js
const bindPageLC = () => {
  Function.prototype.bindPage = function (vmInst) {
    const fn = this
    return function () {
      if (!vmInst) {
        throw new Error('使用错误：请传递VM对象')
      }
      if (vmInst.$valid) {
        return fn.apply(vmInst, arguments)
      } else {
        console.error('页面销毁时，不执行回调函数')
      }
    }
  }
}
```

3. 错误页面

监听 `onPageNotFound`，当页面跳转异常时跳转到自定义错误页面，加埋点上报

4. 全局报错监听

监听`onError`应用报错，应用捕获异常时调用，加埋点上报

5. 后端服务器接口请求失败上报

### 性能优化

**1. 全局挂载公共函数**

`global.$config` 挂载公共静态配置数据：`$config.bpImg`

`global.$utils` 挂载纯函数以及部分系统api的封装：`$utils.formatDate()`

`app.ux` 挂载封装的快应用方法函数：`this.$app.$def.login`

**2. 合理嵌套 html**

html 层级不要超过 28 层，否则会警告；标签要闭合，否则不会报错但是渲染的判断逻辑会不起作用，出现诡异 bug

**3. 合理使用 css 选择器**

css 样式嵌套层级越深，单次匹配耗时越长

避免使用组件（比如 text）名称作为最后一项匹配规则，否则每个 text 组件渲染时都会遍历匹配一次

从右到左匹配，最后一位样式名尽量唯一，较少匹配次数

**4. 简化 ViewModel 数据**

快应用会对赋值的响应式数据中每个属性进行递归式的定义，属性个数的定义越少越好

所以针对数组类型数据，赋值时可过滤掉不需要用到的对象属性

**5. 使用懒加载**

`list` 组件中，不在屏幕之内的 `list-item` 可以在滑动时加载更多，完成渲染

`tabs` 组件中，非当前显示的页签内容，可以在用户点击页签时完成渲染（借助if指令控制tab-content组件的子节点）

### 数据传递

**1. 父子组件传数据**

父组件：`props` <==> 子组件：`$emit()` 触发绑定的自定义事件

子组件：`$dispatch()` 触发自定义事件 <==> 父组件：`$on()` 监控自定义事件，向外传递

父组件：`$broadcast()` 触发自定义事件 <==> 子组件：`$on()` 监控自定义事件，向内传递

**2. 兄弟组件传数据**

自己写一个提供发布订阅能力的 JS，然后各个 `ViewModel` 引入这个JS文件

或者将其挂载在页面级别的 `ViewModel`，子组件通过 `$root` 引用到页面级别的 `ViewModel`

父组件

```js
<script>
  import {
    createOrRetrieveInst
  } from './pubsub.js'

  export default {
    onReady () {
      // 1. 实例化：并绑定在VM上
      this.pubsubModel = createOrRetrieveInst()

      // 2. 订阅：其它VM也可以调用
      this.pubsubModel.subscribe('count-add', function (vArg0, vArg1){ ... })

      // 3. 发布：其它VM也可以调用
      this.pubsubModel.publish('count-add', ['arg0', 'arg1'])
    }
  }
</script>
```

子组件
```js
<script>
  export default {
    onReady () {
      // 1. 订阅
      this.$root.pubsubModel.subscribe('count-add', function (vArg0, vArg1){ ... })

      // 2. 发布
      this.$root.pubsubModel.publish('count-add', ['arg0', 'arg1'])
    }
  }
</script>
```

**3. 跨层级传数据**

`app.ux` 中：

```js
  onCreate() {
    this.dataCache = {} // 初始化 app 缓存的数据
  },
  getAppData(key) { // 获取 app 缓存的数据
    return this.dataCache[key]
  },
  setAppData(key, val) { // 设置 app 缓存的数据
    this.dataCache[key] = val
  },
```

使用：

```js
// 任意页面设置
this.$app.setAppData('adbooks', JSON.parse(JSON.stringify(adBook)))

// 任意页面获取
this.$app.getAppData('adbooks')
```

### 快速生成多个快应用

需求：一个快应用为主，衍生出多个换肤、换图、换问题的快应用

解决：用命令行复制新的配置去覆盖现有配置再打包，配置项文件 `manifest.json`、`variables.less`、公共 `config.js`

### 负一屏卡片开发

1. 新版负一屏卡片整体空间完全自定义，包括 logo、标题、刷新频率，每次滑到负一屏就会触发1次 `onShow`

2. 卡片加载有系统 loading，自己不需要再加 loading，否则2个 loading 会冲突，加载中间态要用骨架屏

3. 缓存读取问题：负一屏卡片要读取快应用 `storage` 缓存，包名必须一致，不能独立建包，要把卡片嵌在快应用中，然后在管理平台创建智慧服务即可

4. console 查看

- 电脑安装 `adb`
- brew cask install android-platform-tools
- `adb logcat -c` 清除log缓存信息
- `adb logcat -v time >./log.log` 写入日志，然后在日志文件中找信息

5. 夜间适配

- 必须适配夜间模式
- 不支持媒体查询 `@media (prefers-color-scheme: dark) {}`
- 根据获取的当前题模式值去动态修改每个组件样式

## 一点感悟

做完一个周期的快应用项目，对比静态页面、jq、vue、react、小程序、uni-app、electron以及各种衍生的组件库

核心还是三个东西，html 页面结构、css 样式、js 逻辑：

- html 页面结构这块写法、优化、注意项都差不多
- css 写法也一样（除了 react 的 css in js 写法），掌握一套完整的样式写法基本能搞定常规业务
- js 核心逻辑写法也是一样的

然后会发现各种项目的脚手架、项目结构、使用方法也都差不多，到最后写的最多的始终是业务逻辑。

这里就可以整理出一整套自己的项目开发方法然后持续复用：包括项目结构、文件命名、html 结构、css 命名和写法、js 常规方法、api 调用方法、说明文档、eslint 规则等配置项等等。

举其中一个点：

经常会用到的消息提示弹窗

element：

```js
this.$message({
  message: '这是一条消息提示',
  type: 'info',
  duration: 3000,
  ...
})
```

vant：

```js
this.$notify({
  message: '这是一条消息提示',
  type: 'danger',
  duration: 3000
  ...
})
```

antd：

```js
message.success({
  content: '这是一条消息提示',
  duration: 3,
  ...
})
message.loading({
  content: '这是一条消息提示',
  duration: 3,
  ...
})
```

微信小程序：

```js
wx.showToast({
  title: '成功',
  icon: 'success',
  duration: 1500
})

```

uni-app：

```js
uni.showToast({
	title: '这是一条消息提示',
  icon: 'success',
	duration: 1500
})
```

快应用：

```js
prompt.showToast({
  message: 'message',
  duration: 0
})
```

这些框架、组件库基本用法和原理是类似的，最大的区别在于 api 的命名以及参数的差异，每个都去记住费劲又费记忆。

这里就可以重新封装这个 api，比如统一成 `$utils.showToast()`，这样始终记住这一个就够了。

可以封装的功能包括：各种反馈弹窗、登录退出注销、支付、缓存存储、埋点函数、各框架提供的系统调用方法等。

把常用的重新封一遍再用，可以进一步磨平差异，减轻记忆负担。

我的分享到此完毕，感谢阅读，谢谢~