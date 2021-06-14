---
lang: zh-CN
sidebar: auto
meta:
  - name: description
    content: MongoDB 只读权限设置
  - name: keywords
    content: 前端一锅煮,MongoDB 只读权限设置
---

# MongoDB 只读权限设置

## 相关命令

查看本机 mongodb 版本：`mongo -version`

查看本机运行的 mongodb：`ps aux | grep mongodb`

连接本机数据库：`mongo localhost:27017`

用账号密码连接本机数据库：`mongo -port 27017 -u 'admin' -p 'admin_root_test'`

显示数据库列表：`show dbs`

切换/创建数据库：`use mytest`

删除当前数据库：`db.dropDatabase()`

创建集合：`db.createCollection('book')`

显示当前所有用户：`show users`

删除用户：`db.dropUser('myread')`

杀死运行的 mongodb：`kill pid`

## 只读权限设置

1. 启动 mongodb 服务

mac：`mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork`

linux：`systemctl start mongod` 或 `service mongod start`

2. 进入命令

`mongo localhost:27017`

3. 创建管理员账号

```bash
use admin
db.createUser({user:'admin', pwd:'admin_root_test',roles:[{ role: 'root', db: 'admin' }]})
```

4. 关闭 mongodb

`db.adminCommand( { shutdown: 1 } )`

或者

```bash
ps -ef | grep mongodb // 查看 momgodb pid
kill pid
```

5. 用权限认证重开

`mongod --auth --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork`

或者

```bash
vi /etc/mongod.conf
security:
  authorization: enabled
```

6. 再次进入命令

`mongo -port 27017 -u 'admin' -p 'admin_root_test'`

7. 创建只读用户

```bash
use mytest // 创建数据库
db.createCollection('book') // 创建集合，以方便 show dbs 能显示数据库
db.createUser({ user: 'myread', pwd: 'myread_pwd', roles: [{ role: 'read', db: 'mytest' }] })
```

## 角色权限解读

Built-In Roles（内置角色）：

1. 数据库用户角色：read、readWrite。

2. 数据库管理角色：dbAdmin、dbOwner、userAdmin。

3. 集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager。

4. 备份恢复角色：backup、restore。

5. 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase。

6. 超级用户角色：root 还有几个角色间接或直接提供了系统超级用户的访问（dbOwner 、userAdmin、userAdminAnyDatabase）。

7. 内部角色：__system。

具体角色：

- Read：允许用户读取指定数据库。

- readWrite：允许用户读写指定数据库。

- dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问。

- userAdmin：允许用户向 system.users 集合写入，可以找指定数据库里创建、删除和管理用户。

- clusterAdmin：只在 admin 数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。

- readAnyDatabase：只在 admin 数据库中可用，赋予用户所有数据库的读权限。

- readWriteAnyDatabase：只在 admin 数据库中可用，赋予用户所有数据库的读写权限。

- userAdminAnyDatabase：只在 admin 数据库中可用，赋予用户所有数据库的 userAdmin 权限。

- dbAdminAnyDatabase：只在 admin 数据库中可用，赋予用户所有数据库的 dbAdmin 权限。

- root：只在 admi n数据库中可用。超级账号，超级权限。
