<template>
  <div class="v_list_index">
    <ol>
      <li v-for="(item, index) in lists">
        <span class="list_num">{{ pages + index + 1 }}.</span>
        <a href="javascript:;" @click="go(item.url)">{{ item.name }}</a>
        <span class="date">{{ item.date }}</span>
      </li>
    </ol>
    <div class="page_index">
      <template v-if="totalPage > 1">
        <span class="btn" @click="prev" :class="prevDisable ? 'disable' : ''">上一页</span>
        <span class="btn" @click="next" :class="nextDisable ? 'disable' : ''">下一页</span>
        <span class="btn">{{ curPage }}</span>
        <span class="btn btn_last">共 {{ totalPage }} 页 {{ datas.length }}篇</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          name: '怎么免费安装 mac 软件？',
          url: '/page/tools/mac_down.html',
          date: '2024-12-15',
        },
        {
          name: 'webview 退出拦截和通信',
          url: '/page/app/webview.html',
          date: '2024-07-15',
        },
        {
          name: '发现最好的 AI',
          url: '/page/ai/ai.html',
          date: '2024-07-11',
        },
        {
          name: '华为浏览器小说',
          url: '/page/read/hb.html',
          date: '2024-06-11',
        },
        {
          name: '可乐快应用总结',
          url: '/page/app/cola.html',
          date: '2024-05-03',
        },
        {
          name: 'serviceWorker 更新方案',
          url: '/page/list/updateService.html',
          date: '2024-01-18',
        },
        {
          name: '你不知道的阅读器排版引擎~',
          url: '/page/read/read.html',
          date: '2023-07-31',
        },
        {
          name: 'ts 被高估了',
          url: '/page/list/ts.html',
          date: '2023-07-10',
        },
        {
          name: 'serviceWorker 实战',
          url: '/page/list/serviceWorker.html',
          date: '2023-07-07',
        },
        {
          name: 'BFC 揭秘与应用',
          url: '/page/css/bfc.html',
          date: '2022-11-10',
        },
        {
          name: '快应用开发入门',
          url: '/page/app/quick_app.html',
          date: '2022-05-11',
        },
        {
          name: '从零配置前端开发环境-Mac',
          url: '/page/tools/mac.html',
          date: '2021-09-05',
        },
        {
          name: '二论命名之下划线',
          url: '/page/list/underline.html',
          date: '2021-09-04',
        },
        {
          name: 'Mac 开机自启动',
          url: '/page/tools/maclist.html',
          date: '2021-07-17',
        },
        {
          name: 'MongoDB 只读权限设置',
          url: '/page/node/power.html',
          date: '2021-04-20',
        },
        {
          name: 'Node.js 性能优化',
          url: '/page/node/perf.html',
          date: '2021-04-04',
        },
        {
          name: ' Node.js 多进程',
          url: '/page/node/process.html',
          date: '2021-04-04',
        },
        {
          name: '从一次攻击看前端安全问题',
          url: '/page/node/security.html',
          date: '2021-04-03',
        },
        {
          name: 'HTTP、HTTP2、HTTPS全解析',
          url: '/page/node/http.html',
          date: '2021-04-03',
        },
        {
          name: '深入理解事件循环机制',
          url: '/page/node/loop.html',
          date: '2021-04-02',
        },
        {
          name: 'V8 内存管理和垃圾回收机制',
          url: '/page/node/v8.html',
          date: '2021-04-02',
        },
        {
          name: 'Koa 洋葱模型',
          url: '/page/node/onion.html',
          date: '2021-04-02',
        },
        {
          name: 'JS 原型链',
          url: '/page/js/prototype.html',
          date: '2021-03-13',
        },
        {
          name: 'SSO 单点登录',
          url: '/page/list/sso.html',
          date: '2021-03-06',
        },
        {
          name: '优化 NPM 运行脚本',
          url: '/page/list/npm_run.html',
          date: '2021-03-06',
        },
        {
          name: 'ES2015~ES2024 各阶段新特性',
          url: '/page/list/es6.html',
          date: '2021-03-05',
        },
        {
          name: '移动端UI设计规范',
          url: '/page/list/fe_design.html',
          date: '2020-11-01',
        },
        {
          name: '前后端命名最佳实践',
          url: '/page/list/fe_server_name.html',
          date: '2020-10-30',
        },
        {
          name: '前后端上线必检清单',
          url: '/page/list/fe_server_check.html',
          date: '2020-10-20',
        },
        {
          name: '挑战大厂第3篇-new、call、create等常见函数的内部实现',
          url: '/page/js/fn.html',
          date: '2020-04-08',
        },
        {
          name: '挑战大厂第2篇-手动实现promise.all',
          url: '/page/js/promise_all.html',
          date: '2020-04-07',
        },
        {
          name: '挑战大厂第1篇-js树结构互转',
          url: '/page/js/three.html',
          date: '2020-04-06',
        },
        {
          name: '前端标准规范-v1.0',
          url: '/page/list/fe.html',
          date: '2019-11-19',
        },
        {
          name: 'vscode 使用指南',
          url: '/page/tools/vscode.html',
          date: '2019-10-01',
        },
        {
          name: 'js 拾遗',
          url: '/page/js/base_summary.html',
          date: '2019-06-28',
        },
        {
          name: 'JS 加法知多少？',
          url: '/page/js/add.html',
          date: '2019-03-06',
        },
        {
          name: 'npm cnpm npx nvm 傻傻分不清',
          url: '/page/list/npm.html',
          date: '2019-01-16',
        },
        {
          name: 'webpack4 一点通',
          url: '/page/list/webpack4.html',
          date: '2018-11-21',
        },
        {
          name: 'vue 无痕刷新',
          url: '/page/vue/vue_reload.html',
          date: '2018-11-16',
        },
        {
          name: '前端项目模板',
          url: '/page/list/project_template.html',
          date: '2018-11-15',
        },
        {
          name: 'Vue ui 大法哪家强？',
          url: '/page/vue/vue_ui_contrast.html',
          date: '2018-11-03',
        },
        {
          name: 'css 布局：两边固定中间自适应',
          url: '/page/css/css_layout_two.html',
          date: '2018-10-16',
        },
        {
          name: 'Shell 脚本编写教程',
          url: '/page/list/sh.html',
          date: '2018-10-11',
        },
        {
          name: 'Markdown 表情代码',
          url: '/page/list/emoji.html',
          date: '2018-10-11',
        },
      ],
      lists: [],
      prevDisable: false,
      nextDisable: false,
      totalPage: 0,
      pages: 0,
      curPage: 1,
    }
  },
  mounted() {
    this.totalPage = Math.ceil(this.datas.length / 20);
    this.curPage = Number(localStorage.getItem('page')) || 1;
    this.getLists(this.curPage);
    this.clear();
  },
  methods: {
    getLists(page) {
      localStorage.setItem('page', page);
      this.pages = (page - 1) * 20;
      this.lists = this.datas.slice(this.pages, this.pages + 20);
    },
    clear() {
      this.limitPrev();
      this.limitNext();
    },
    limitPrev() {
      if (this.curPage <= 1) {
        this.prevDisable = true
        return false
      } else {
        this.prevDisable = false
        return true
      }
    },
    limitNext() {
      if (this.curPage >= this.totalPage) {
        this.nextDisable = true
        return false
      } else {
        this.nextDisable = false
        return true
      }
    },
    prev() {
      if (this.limitPrev()) {
        this.curPage -= 1;
        this.getLists(this.curPage);
        this.clear();
      }
    },
    next() {
      if (this.limitNext()) {
        this.curPage += 1;
        this.getLists(this.curPage);
        this.clear();
      }
    },
    go(url) {
      this.$router.push(url);
    }
  }
}
</script>

<style lang="scss">
.v_list_index {
  ol {
    list-style: none;
    padding-left: 0;
  }
  .list_num {
    margin-right: 5px;
  }
  .date {
    margin-left: 10px;
    color: #666;
    font-size: 14px;
  }

  .page_index {
    margin-top: 20px;
    .btn {
      cursor: pointer;
      font-size: 14px;
      color: #3eaf7c;
      margin-right: 10px;
    }
    .btn_last{
      margin-left: 10px;
    }
    .disable {
      color: #666;
    }
  }
}
</style>