#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# 先改配置文件的 base，然后执行命令提交到 gitee静态资源站点
npm run build -- pages

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://github.com/cjm0/blog.git
# git push -f git@gitee.com:cjm0/cjm0.gitee.io.git master

# 如果发布到 https://github.com/cjm0/blog.git/vblog
# git push -f git@gitee.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:cjm0/blog.git master:gh-pages


# 返回上一次的工作目录
cd -