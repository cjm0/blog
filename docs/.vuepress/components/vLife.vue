<!--
 * @Description : d
 * @Author      : chenjianmin
 * @Date        : 2024-09-03 16:01:36
-->
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
      <span class="btn" @click="prev" :class="prevDisable ? 'disable' : ''">上一页</span>
      <span class="btn" @click="next" :class="nextDisable ? 'disable' : ''">下一页</span>
      <span class="btn">{{ curPage }}</span>
      <span class="btn btn_last">共 {{ totalPage }} 页 {{ datas.length }}篇</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          name: '我的前端一天',
          url: '/page/life/feday.html',
          date: '2021-12-04',
        },
        {
          name: '小思三则',
          url: '/page/life/think.html',
          date: '2021-08-30',
        },
        {
          name: '敏捷开发扫盲',
          url: '/page/life/aglie.html',
          date: '2021-04-28',
        },
        {
          name: '你是怎么变自律的？',
          url: '/page/life/discipline.html',
          date: '2021-04-20',
        },
        {
          name: '十二规划',
          url: '/page/life/plan.html',
          date: '2021-03-22',
        },
        {
          name: '一眼万年之生命的长度',
          url: '/page/life/time.html',
          date: '2021-03-21',
        },
        {
          name: '自信的锚点',
          url: '/page/life/confidence.html',
          date: '2021-03-07',
        },
        {
          name: '今天，从有趣的灵魂开始',
          url: '/page/life/soul.html',
          date: '2020-10-08',
        },
        {
          name: '从自如搬家看代码整洁之道',
          url: '/page/life/code_review.html',
          date: '2020-08-22',
        },
        {
          name: '听说你在找工作',
          url: '/page/life/need_work.html',
          date: '2019-04-07',
        },
        {
          name: 'App 二三记~',
          url: '/page/life/app.html',
          date: '2019-02-06',
        },
        {
          name: '前端修炼之路',
          url: '/page/list/fe_up.html',
          date: '2019-01-28',
        },
        {
          name: '经典资源收藏',
          url: '/page/list/source_link.html',
          date: '2018-11-27',
        },
        {
          name: '网贷理财平台收益概览',
          url: '/page/life/money_rate.html',
          date: '2018-11-19',
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