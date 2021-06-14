---
lang: zh-CN
sidebar: auto
meta:
  - name: description
    content: webpack4 基础版,实用版,对比webpack3,降低心里难度
  - name: keywords
    content: 前端一锅煮,webpack4,webpack3
---

# webpack4 一点通

> [webpack](https://webpack.docschina.org/configuration/dev-server/#devserver-proxy) 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

## 安装

webpack 最新版本 **v4.26.0**

github star：**45.292k**  

需要同时安装 `webpack`、`webpack-cli`、`webpack-dev-server`，建议安装在每个独立项目而不是全局，这样方便单独使用 webpack3 或者 webpack4

```bash
yarn add webpack webpack-cli webpack-dev-server -D 
或者：
cnpm install webpack webpack-cli webpack-dev-server -D
```
::: warning 提示
2018年8月25号webpack4正式发布。再次之后只要使用npm install webpack命令，默认安装的就是版本4
:::


## 基础版

webpack4 会根据环境自动设置一些默认配置，下面是一个最基础的配置：

**package.json**

```json
// --config webpack.config.js  配置文件的路径
// --mode=production 用到的模式
// --progress 打印出编译进度的百分比值
"scripts": {
  "dev": "webpack-dev-server --progress --mode=development --config webpack.config.js",
  "build": "webpack --progress --mode=production --config  webpack.config.js",
},
```

**webpack.config.js**

```js 
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', // 资源引用路径前后都有斜杠
        filename: '[name].js'
    },
    devServer: {
        open: true, // 自动打开浏览器
        host: '0.0.0.0',
        port: 3003,
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            filename: 'index.html',
            template: path.resolve(__dirname, 'template.html'),
        }),
        new webpack.HotModuleReplacementPlugin(), // 开启webpack热更新功能
        new webpack.NoEmitOnErrorsPlugin(), // webpack编译出错跳过报错阶段，在编译结束后报错
    ],
}
```

浏览器输入 `http://0.0.0.0:3003/webpack-dev-server` 可以查看开发环境文件结构


## 实用版

### package.json

在实际使用中建议分开配置，生产环境和开发环境分别对应一个配置文件  

```json
// --config config/webpack.dev.js  配置文件的路径
// --progress 打印出编译进度的百分比值
"scripts": {
    "start": "webpack --progress --config config/webpack.dll.js",
    "dev": "webpack-dev-server --progress --config config/webpack.dev.js",
    "build": "webpack --progress --config config/webpack.prod.js"
},
```


### base.conf.js

把公共配置提取到一个公用文件 base.conf.js 中，后期所有修改都在这个文件，其他配置文件不动，减小人为错误

```js
const os = require('os')
const getIp = () => { // 获取本地ip
    var interfaces = os.networkInterfaces();
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

module.exports = {
    base: {
        rootPath: '/',
        fileName: 'dist',
        filePath: 'dist/static',
    },
    dev: {
        useEslint: true,
        host: getIp(),
        port: 3001,
        proxy: [
            {
                context: ['/v2', '/xw', '/wap', '/information'],
                target: 'https://xwm.jindanlicai.com/',
                changeOrigin: true,
                cookieDomainRewrite:{
                    "*":getIp()
                }
            },
        ]
    }
}
```


### webpack.base.js

提取开发环境和取生产环境的相同部分到基础配置文件 webpack.base.js 中

```js
const config = require('./base.conf.js') // 配置文件
const path = require('path') 
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HappyPack = require('happypack') // 多进程 默认三个
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

// 处理路径
function resolve (dir) { 
    return path.join(__dirname, '..', dir)
}

// eslint检测
const createLintingRule = () => ({ 
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    exclude: /node_modules/,
    include: [resolve('src')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: true
    }
})

// 获取当前环境
const prod = process.env.NODE_ENV === 'production' 

module.exports = {
    context: path.resolve(__dirname, '../'), // 作用于entry 和 loader
    entry: {
        index: './src/main.js',
    },
    output: { 
        path: resolve(`${config.base.filePath}`), // 输出到static这个地址 只能是绝对路径
        filename: 'js/[name].js',
        chunkFilename: 'js/[name]_[chunkhash:6].js'
    },
    resolve: {
        extensions: ['.css', '.less', '.js', '.vue', '.json'], // 使用的扩展名
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js', // 模块别名列表
            '@': resolve('src'),
        }
    },
    module: {
        // 忽略的文件中不应该含有 import, require, define 的调用，或任何其他导入机制，忽略部分插件可以提高构建性能
        noParse: /^(vue|vue-router|vuex|vuex-router-sync|axios)$/,
        rules: [
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: resolve('src')
            },
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader',
                include: resolve('src')
            },
            {
                test: /\.css$/,
                oneOf: [
                    // 这里匹配 `<style module>`
                    {
                        resourceQuery: /module/,
                        use: [
                            {
                                // 只在生产环境下使用 CSS 提取，便于你在开发环境下进行热重载
                                loader: prod ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                                options: {
                                    publicPath: '../'
                                    /*
                                        复写css文件中资源路径
                                        因为css文件中的外链是相对与css的，
                                        我们抽离的css文件在可能会单独放在css文件夹内
                                        引用其他如img/a.png会寻址错误
                                        这种情况下所以单独需要配置../，复写其中资源的路径
                                    */
                                }, 
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    modules: true, // 开启 css module
                                    localIdentName: 'v_[hash:6]' // 自定义生成的类名
                                }
                            },
                            'postcss-loader' // 自动加前缀以兼容其他浏览器
                        ]
                    },
                    // 这里匹配普通的 .css 文件 或 <style>
                    {
                        use: [
                            {
                                loader: prod ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                                options: {
                                    publicPath: '../'
                                }, 
                            },
                            'css-loader',
                            'postcss-loader',
                        ]
                    }
                ]
            },
            {
                test: /\.less$/,
                oneOf: [
                    // 这里匹配 `<style lang="less" module>`
                    {
                        resourceQuery: /module/,
                        use: [
                            {
                                loader: prod ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                                options: {
                                    publicPath: '../'
                                }, 
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 2,
                                    modules: true, // 开启 css module
                                    localIdentName: 'v_[hash:6]' // 自定义生成的类名
                                }
                            },
                            'postcss-loader',
                            'less-loader'
                        ]
                    },
                    // 这里匹配普通的 .less 文件 或 <style lang="less">
                    {
                        use: [
                            {
                                loader: prod ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                                options: {
                                    publicPath: '../'
                                }, 
                            },
                            'css-loader',
                            'postcss-loader',
                            'less-loader'
                        ]
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'HappyPack/loader?id=js',
                exclude: file => (
                    /node_modules/.test(file) && !/\.vue\.js/.test(file)
                )
            },
            // url-loader 包含 file-loader，先把小于 4kb 的文件转换成 base64，然后交给 file-loader 去处理路径问题
            {
                test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'img/[name]_[hash:6].[ext]',
                    limit: 4096,
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'fonts/[name]_[hash:6].[ext]',
                    limit: 4096,
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'media/[name]_[hash:6].[ext]',
                    limit: 4096,
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(), // vue-loader新用法
        new HappyPack({ // 提高js编译速度
            id: 'js',
            loaders: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            }]
        })
    ],
}
```


### webpack.dev.js

开发环境配置，主要是在本地启动一个服务

```js 
process.env.NODE_ENV = 'development' // 设置当前环境为开发环境 放在最上面
const config = require('./base.conf.js') // 配置文件
const baseWebpackConfig = require('./webpack.base.js')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin= require('friendly-errors-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    mode: 'development', // 启用开发模式配置
    output: {
        publicPath: '/', // 资源引用路径前后都有斜杠
    },
    devServer: {
        contentBase: path.join(__dirname, '..', `${config.base.fileName}`), // 用来指定index.html所在目录
        clientLogLevel: "warning", // 热更新时阻止控制台显示消息 太多了 没加eslint none
        overlay: {warnings: true, errors: true}, // webpack的eslint等错误、警告提示显示在页面中 全为true会停止页面运行
        noInfo: true, // 每次启动和保存，只显示webpack编译的错误和警告信息
        historyApiFallback: true, // 任意的跳转或404响应可以指向 index.html 页面
        watchContentBase: true, // 修改没有被入口文件托管的文件，比如index.html文件，也会自动更新
        compress: true, // 一切服务都启用gzip 压缩
        hot: true, // 启动webpack热模块替换特性
        inline: true, // 自动刷新
        open: true, // 自动打开浏览器
        host: config.dev.host,
        port: config.dev.port,
        proxy: config.dev.proxy,
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/assets/template.html'),
            vendorJsName: 'vendor.dll.js', // 给模板引用
        }),
        new webpack.HotModuleReplacementPlugin(), // 开启webpack热更新功能
        new webpack.NoEmitOnErrorsPlugin(), // webpack编译出错跳过报错阶段，在编译结束后报错
        new FriendlyErrorsPlugin({ // webapck启动时在终端显示信息
            compilationSuccessInfo: {
                messages: [`Your application is running here: http://${config.dev.host}:${config.dev.port}`],
            }
        }),
        new CopyWebpackPlugin( // 本地开发环境
            [ 
                { 
                    from: path.resolve(__dirname, '../dist/static/js/vendor.dll.js'),
                    to: './static/',
                }
            ], 
            {
                ignore: ['.DS_Store'],
                copyUnmodified: true, 
                // debug: "debug" // 是否打印复制的详细信息
            }
        )
    ],
    devtool: 'cheap-module-eval-source-map',
})
```


### webpack.prod.js 

生产环境配置

```js
process.env.NODE_ENV = 'production' // 设置当前环境为生产环境 放在最上面
const config = require('./base.conf.js') // 配置文件
const baseWebpackConfig = require('./webpack.base.js')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    mode: 'production', // 启用生产模式配置
    output: {
        publicPath: './static/', // 资源引用路径前后都有斜杠
    },
    stats: {
        // 未定义选项时，stats 选项的备用值(fallback value)（优先级高于 webpack 本地默认值）
        all: undefined,
        modules: false, // 添加构建模块信息
        children: false, // 添加 children 信息
        colors: true, // `webpack --colors` 等同于
    },
    plugins: [
        new CleanWebpackPlugin(
            ['dist/*.html', 'dist/static/js', 'dist/static/css', 'dist/static/img', 'dist/static/fonts', 'dist/static/media'], // 删除匹配的文件
            {
                root: path.resolve(__dirname, '../'), // 重置到根路经
                exclude: ['vendor.dll.js', 'vendor.manifest.json'], // 这几个文件不删除
                verbose: false, // 开启在控制台输出信息
                dry: false, // 启用删除文件
            }
        ),
        new CopyWebpackPlugin( // 这部分不会被 webpack loader 处理
            [ 
                { 
                    from: path.resolve(__dirname, '../src/public/'),
                    to: 'public/',
                },
            ], 
            {
                ignore: ['.DS_Store'],
                copyUnmodified: true, 
                // debug: "debug" // 是否打印复制的详细信息
            }
        ),
        new webpack.DllReferencePlugin({
            manifest: require(`../${config.base.filePath}/js/vendor.manifest.json`),
            context: path.join(__dirname, '..'), // 和dllplugin里面的context一致
        }),
        new MiniCssExtractPlugin({ // 提取css
            filename: 'css/[name]_[contenthash:6].css'
        }),
        new OptimizeCss({ // 压缩提取的css
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true,
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html', // 相对于static的路径
            template: path.resolve(__dirname, '../src/assets/template.html'),
            hash: true, 
            minify: {
                removeAttributeQuotes: true, // 清除属性引号
                collapseWhitespace: true, // 清除多余空格
                minifyJS: true, // 压缩javascript
            },
            vendorJsName: 'vendor.dll.js?' + new Date() * 1, // 给模板引用
            chunksSortMode: "dependency",
        })
    ],
    performance: {
        hints: "warning" // 打包资源超过 250kb 出提示
    }
})
```


### webpack.dll.js

提取依赖的包，这样每次 build 的时候就不用处理依赖包了，提高打包速度

```js
const config = require('./base.conf.js') // 配置文件
const package = require('../package.json') 
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'production', // 启用生产模式配置
    entry: {
        // 如果使用了chrome的vue-devtool，那打包的时候把vue也排除掉，因为压缩过的vue是不能使用vue-devtool的
        vendor: Object.keys(package.dependencies).filter((val) => {
                    return val != 'test'
                })
    },
    stats: {
            // 未定义选项时，stats 选项的备用值(fallback value)（优先级高于 webpack 本地默认值）
            all: undefined,
            modules: false, // 添加构建模块信息
            children: false, // 添加 children 信息
            colors: true, // `webpack --colors` 等同于
    },
    output: {
        path: path.resolve(__dirname, `../${config.base.filePath}`),
        filename: 'js/[name].dll.js',
        library: '[name]' // 生成文件的映射关系，与下面DllPlugin中name配置对应
    },
    plugins: [
        new CleanWebpackPlugin(
            [`${config.base.filePath}`],  // 匹配删除的文件
            {
                root: path.join(__dirname, '../'), // 必须先重置到根路经
                verbose: true, // 开启在控制台输出信息
                dry: false // 启用删除文件
            }
        ),
        new webpack.DllPlugin({ // 会生成一个json文件，里面是关于dll.js的一些配置信息
            path: path.resolve(__dirname, `../${config.base.filePath}/js/[name].manifest.json`),
            name: '[name]', // 与上面output中配置对应
            context: path.join(__dirname, '..') // 上下文环境路径（必填，为了与DllReferencePlugin存在与同一上下文中）
        })
    ]
}
```


### 注意

**1. mode** 

webpack增加了一个 `mode` 配置，只有两种值 `development | production`。对不同的环境会启用不同的配置：

| 选项 | 描述 |
| -- | -- |
| `development` | 会将 `process.env.NODE_ENV` 的值设为 `development`。启用 `NamedChunksPlugin` 和 `NamedModulesPlugin`。 |
| `production` | 会将 `process.env.NODE_ENV` 的值设为 `production`。启用 `FlagDependencyUsagePlugin`, `FlagIncludedChunksPlugin`, `ModuleConcatenationPlugin`, `NoEmitOnErrorsPlugin`, `OccurrenceOrderPlugin`, `SideEffectsFlagPlugin` 和 `UglifyJsPlugin`。 |

`NamedModulesPlugin` 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境

`ModuleConcatenationPlugin` 预编译所有模块到一个闭包中，提升你的代码在浏览器中的执行速度 

`NoEmitOnErrorsPlugin` 在编译出现错误时，直接退出 

`OccurrenceOrderPlugin` 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID  

**2. loader**

解析转换源代码,从右到左执行，链式传递 

`include/exclude` 手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）

`css-loader` 使你能够使用类似 `@import` 和 `url(...)` 的方法实现 `require()` 的功能 

`style-loader` 将所有的计算后的样式加入页面中 

**3. plugins**  

解决 loader 无法实现的其他事

**4. Manifest**  

资源映射文件，解析和加载模块

**5. autoprefixer.browsers**  

[每个配置支持的浏览器](https://browserl.ist)

[配置的写法](https://github.com/browserslist/browserslist)

`browsers: ['> 0.5%', 'last 3 versions']` // 兼容性最广泛

`browsers: ['> 0.5%', 'last 2 versions', 'ie > 8']` // 常用

`browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead']` // 默认配置


## 对比 webpack3

**1. 增加 mode 配置**  

- 默认生产环境开起了很多代码优化（minify, splite）

- 开发时开启注视和验证，并加上了evel devtool

- 生产环境不支持watching，开发环境优化了打包的速度

- 自动设置process.env.NODE_EVN到不同环境，也就是不使用DefinePlugin了

- 如果mode设置none，所有默认设置都会去掉

**2. 自带环境变量**

可在页面代码中直接获取当前环境变量 `console.log(process.env.NODE_ENV)`

**3. webpack-cli**

webpack 启动命令行的代码放入了 webpack-cli 中，只安装 webpack，那么它只能在 nodejs 中使用，不能再命令行中使用

**4. UglifyJsPlugin**

不需要使用这个插件，只需要使用 `optimization.minimize` 为 true 就行，production mode 下自动为 true

**5. vue-cli3** 

`vue inspect > output.js`



















