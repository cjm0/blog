---
sidebar: auto
description: 优化 NPM 运行脚本
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,优化 NPM 运行脚本
---

# 优化 NPM 运行脚本

有时候，运行一个工程，可能需要执行多个脚本。如需要执行客户端代码的 webpack 打包，还要执行服务端代码的 webpack 打包，当服务端代码进行 webpack 进行打包后，还要重新启动服务器等。

基于这样一个需求，可以使用 npm 钩子，cross-env，better-npm-run 和 npm-run-all 来优化 NPM 运行脚本。

## npm 钩子

npm 默认提供下面这些钩子

```text
prepublish，postpublish
preinstall，postinstall
preuninstall，postuninstall
preversion，postversion
pretest，posttest
prestop，poststop
prestart，poststart
prerestart，postrestart
```

npm run install 默认执行顺序：`npm run preinstall > npm run install > npm run postinstall`

## cross-env

[cross-env 跨平台环境变量设置](https://github.com/kentcdodds/cross-env#readme)

Mac Window node scripts 设置环境变量兼容插件

```json
Node.js10 以及更高版本，npm install cross-env -D
Node.js8 以及更低版本，npm install cross-env@6 -D

{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  }
}
```

## better-npm-run

[better-npm-run 长命令单独拎出来写](https://github.com/benoror/better-npm-run#readme)

```json
"scripts": {
    "build:dev": "better-npm-run build-dev",
    "build:prod": "better-npm-run build-prod",
    "test": "better-npm-run test"
},
"betterScripts": {
    "build-dev": "webpack --config $npm_package_webpack --progress --colors",
    "build-prod": {
        "command": "webpack --config $npm_package_webpack --progress --colors",
        "env": {
            "NODE_ENV": "production"
        }
    },
    "test": {
        "command": "karma start",
        "env": {
            "NODE_ENV": "test"
        }
    }
}
```

## npm-run-all

[npm-run-all 同时组织执行多个脚本](https://www.npmjs.com/package/npm-run-all)

运行 npm run dev，会一次执行 dev:start、dev:build:client、dev:build:server 命令

```json
npm install npm-run-all -D

{
    "dev": "npm-run-all --serial dev:**",
    "dev:start": "nodemon --watch build exec node \"build/bundle.js\"",
    "dev:build:client": "webpack --config webpack.config.client.js --watch",
    "dev:build:server": "webpack --config webpack.config.server.js --watch"
}

多种运行多个命令的方式：默认 --serial
    --parallel: 并行运行多个命令
        npm-run-all --parallel lint build 或
        run-p lint build
    --serial: 多个命令按排列顺序执行
        npm-run-all --serial clean lint build:** 或
        run-s clean lint build:**
    --continue-on-error:
        是否忽略错误，添加此参数 npm-run-all 会自动退出出错的命令，继续运行正常的
    --race:
        添加此参数之后，只要有一个命令运行出错，那么 npm-run-all 就会结束掉全部的命令

Glob-like 名称匹配
    你可以使用 Glob 通配符来匹配任务名称，方便指定多个名称相似的任务
    npm-run-all --parallel watch:*
        不匹配分隔符，同时运行 watch:html watch:js 但不运行 watch:js:index。
    npm-run-all --parallel watch:**
        匹配分隔符，所有以 watch: 开头的脚本都会被运行。
```