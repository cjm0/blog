---
home: true
heroImage: /img/user.jpeg
heroImageDark: /img/user.jpeg
pageClass: page_home

head:
  - - meta
    - name: keywords
      content: 前端一锅煮,前端学习,前端笔记

footer: 京ICP备18039352号 | ©2018-present 前端一锅煮

actions:
  - text: 先睹为快 →
    link: /page/list/
    type: primary
  - text: 项目简介
    link: /page/about/
    type: secondary
---

<vHome/>

<style lang="scss">
.page_home {
  .home {
    .hero {
      img {
        max-height: 120px;
        border-radius: 100%;
        overflow: hidden;
      }

      h1 {
        font-size: 2.2rem;
      }

      .description {
        font-size: 1.4rem;
      }

      .action-button {
        padding: 0.6rem 1.2rem;
      }
    }
  }
  @media (max-width: 419px) {
    .home {
      .hero {
        img {
          max-height: 100px;
          border-radius: 100%;
          overflow: hidden;
        }

        h1 {
          font-size: 1.2rem;
        }

        .description {
          font-size: 1rem;
        }

        .action-button {
          padding: 0.2rem 0.6rem;
        }
      }
    }
  }
}
</style>