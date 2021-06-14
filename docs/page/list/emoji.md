---
lang: zh-CN
meta:
  - name: description
    content: markdown 表情代码 
  - name: keywords
    content: markdown,表情代码,vuepress语法,markdown语法
---

# Markdown 表情代码

::: tip
将全部代码中对应 emoji 表情左侧复制后输入你的markdown文本即可显示emoji表情。  
相关参考地址：[Emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)
:::

## 示例

``` md
:100: :1234: :grinning: :smiley: :smile: :grin: :laughing: :satisfied:
```

:100: :1234: :grinning: :smiley: :smile: :grin: :laughing: :satisfied:

## 全部代码

<template>
    <div class="emoji">
        <li v-for="(val, key, index) in datas">
            <span>{{key}}</span>
            <span>{{val}}</span>
       </li>
    </div>    
</template>

<style lang="less">
    .emoji{
        li{
            display: inline-block;
            word-break:break-all;
            width: 25%;
            box-sizing: border-box;
            margin-top: 40px;
            padding-bottom: 10px;
            padding-right: 20px;
            border-bottom: 1px solid #ebebeb;
            span{
                margin-right: 10px;
            }
        }
    }
</style>

<script>
    import emoji from '../lib/emoji.json'
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

