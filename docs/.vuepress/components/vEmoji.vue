<template>
  <div class="v_emoji_index">
    <li v-for="(val, key, index) in datas">
      <span>{{ key }}</span>
      <span>{{ val }}</span>
    </li>
  </div>
</template>

<script>
import emoji from '../../page/lib/emoji.json'
export default {
  data() {
    return {
      datas: emoji,
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
.v_emoji_index {
  li {
    display: inline-block;
    word-break: break-all;
    width: 25%;
    box-sizing: border-box;
    margin-top: 40px;
    padding-bottom: 10px;
    padding-right: 20px;
    border-bottom: 1px solid #ebebeb;

    span {
      margin-right: 10px;
    }
  }
}
</style>