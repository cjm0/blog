---
sidebar: auto
description: Mac 设置开机启动
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,Mac 设置开机启动
---

# Mac 设置开机启动

launchd 是 Mac OS 下用于初始化系统环境的关键进程，它是内核装载成功之后在 OS 环境下启动的第一个进程，可以用来控制服务的自动启动或者关闭。

它的作用就是我们平时说的守护进程，简单来说，用户守护进程是作为系统的一部分运行在后台的非图形化程序。

采用这种方式来配置自启动项很简单，只需要一个 plist 文件，该文件存在的目录有：

用户登陆前 LaunchDaemons：

~/Library/LaunchDaemons

用户登录后 LaunchAgents：

~/Library/LaunchAgents

## 创建 plist 文件

我们可以写一个 plist 文件放到 `~/Library/LaunchAgents` 下面，文件里描述程序路径和启动参数，当我们登录电脑时就会启动这个程序了，而且是杀不了的，被杀了之后会自动重新启动。

下面我们以 mongodb 为例，演示下全过程。

1. 首先创建一个 .plist 文件：

```bash
cd ~/Library/LaunchAgents && ls # 进入到目录

touch org.mongodb.mongod.plist # 创建 plist 文件
```

2. 复制以下内容

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN""http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>KeepAlive</key>
        <dict>
            <key>SuccessfulExit</key>
            <false/>
        </dict>
        <key>Label</key>
        <string>org.mongodb.mongod</string>
        <key>ProgramArguments</key>
        <array>
            <string>/usr/local/mongodb/bin/mongod</string>
            <string>run</string>
            <string>--config</string>
            <string>/usr/local/etc/mongod.conf</string>
        </array>
        <key>RunAtLoad</key>
        <true/>
        <key>WorkingDirectory</key>
        <string>/usr/local/var/mongodb</string>
        <key>StandardErrorPath</key>
        <string>/usr/local/var/log/mongodb/error.log</string>
        <key>StandardOutPath</key>
        <string>/usr/local/var/log/mongodb/mongo.log</string>
    </dict>
</plist>
```

3. 修改程序路径和启动参数

粘贴刚才复制的内容到 org.mongodb.mongod.plist 文件中，然后根据你自己的实际情况对上面的内容做修改：

- mongod 安装路径 `/usr/local/mongodb/bin/mongod` 可以使用 `which mongodb` 命令查看具体的路径

- mongod 配置文件路径 `/usr/local/etc/mongod.conf` 如果没有使用配置文件就把这个删除

- mongodb 工作目录 `/usr/local/var/mongodb`

- StandardErrorPath 错误日志输出路径，可以在 mongod 配置文件中找到

- StandardOutPath 信息日志输出路径，可以在 mongod 配置文件中找到

## 载入 plist 文件

编辑完 plist 文件以后，我们需要将该文件载入到 launchd 里，使用 launchctl 命令，具体命令如下：

使用 launchctl 启动 mongodb

`launchctl load -w ~/Library/LaunchAgents/org.mongodb.mongod.plist`

停止 mongodb 的自启动

`launchctl unload -w ~/Library/LaunchAgents/org.mongodb.mongod.plist`

## 设置别名

为了使用方便，我们可以给 mongodb 的开启和关闭命令设置别名：

`vim ~/.bash_profile # 往配置文件中写入全局变量`

```vim
# mongod 启动、停止、重启别名
alias mongod.start='launchctl load -w ~/Library/LaunchAgents/org.mongodb.mongod.plist'
alias mongod.stop='launchctl unload -w ~/Library/LaunchAgents/org.mongodb.mongod.plist'
alias mongod.restart='mongod.stop && mongod.start'

# redis 启动、停止、重启别名
alias redis.start='launchctl load -w ~/Library/LaunchAgents/org.redis.plist'
alias redis.stop='launchctl unload -w ~/Library/LaunchAgents/org.redis.plist'
alias redis.restart='redis.stop && redis.start'

# nginx 启动、停止、重启别名
alias nginx.start='launchctl load -w ~/Library/LaunchAgents/org.nginx.plist'
alias nginx.stop='launchctl unload -w ~/Library/LaunchAgents/org.nginx.plist'
alias redis.restart='nginx.stop && nginx.start'
```

`soucre ~/.bash_profile # 执行使生效`

## plist 命令

Plist 的全称是 Property lists，是一种用来存储串行化后的对象的文件。

属性列表文件的文件扩展名为 .plist，因此通常被称为 plist 文件。

Plist文件通常用于储存用户设置，也可以用于存储捆绑的信息。

plist 命令：

launchctl load # 加载

launchctl unload # 取消

launchctl list # 查看 launchctl 加载的服务

-w # 立即启动修改
