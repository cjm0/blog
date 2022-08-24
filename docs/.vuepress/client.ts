import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // router.beforeEach((to) => {
    //   console.log('before navigation')
    // })

    // router.afterEach((to) => {
    //   console.log('after navigation')
    // })
  },
  setup() {

  },
  // 全局的 UI 组件
  rootComponents: [],
})