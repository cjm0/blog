if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),t={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-6da860f9"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"29b7dacd915aa0fd2f9164f370b53295"},{url:"assets/01.1a792a41.png",revision:null},{url:"assets/01.82bfa576.png",revision:null},{url:"assets/02.414ac50f.png",revision:null},{url:"assets/1.0f2318aa.png",revision:null},{url:"assets/1.1e073893.png",revision:null},{url:"assets/1.269870f8.png",revision:null},{url:"assets/1.97d2ad35.png",revision:null},{url:"assets/1.b0e5feeb.png",revision:null},{url:"assets/1.fb0cee85.png",revision:null},{url:"assets/10.de2488d2.png",revision:null},{url:"assets/11.f855bbc0.png",revision:null},{url:"assets/12.a6b22d0b.png",revision:null},{url:"assets/2.337c42eb.png",revision:null},{url:"assets/2.488c5bcf.png",revision:null},{url:"assets/2.6b9d6388.png",revision:null},{url:"assets/2.7c3b7896.png",revision:null},{url:"assets/2.85d68e1b.png",revision:null},{url:"assets/2.86da3e4b.png",revision:null},{url:"assets/2.d3e86fe8.png",revision:null},{url:"assets/3.155c96f1.png",revision:null},{url:"assets/3.16835506.png",revision:null},{url:"assets/3.520c8aa2.png",revision:null},{url:"assets/3.69ff16ca.png",revision:null},{url:"assets/3.6fdc7d37.png",revision:null},{url:"assets/4.3065cf34.png",revision:null},{url:"assets/4.39a66c24.png",revision:null},{url:"assets/4.5304b428.png",revision:null},{url:"assets/4.57f815e7.png",revision:null},{url:"assets/4.9566aa79.png",revision:null},{url:"assets/404.da45e630.js",revision:null},{url:"assets/404.html.4a9ee7e2.js",revision:null},{url:"assets/404.html.ab74ef0a.js",revision:null},{url:"assets/5.5dd1d93f.png",revision:null},{url:"assets/5.ebb3a73b.png",revision:null},{url:"assets/5.f1f90848.png",revision:null},{url:"assets/6.17e4a687.png",revision:null},{url:"assets/6.252a7ae8.png",revision:null},{url:"assets/6.6f795e4e.png",revision:null},{url:"assets/7.38ef7f5a.png",revision:null},{url:"assets/7.b23c630b.png",revision:null},{url:"assets/8.437e6679.png",revision:null},{url:"assets/8.4d7a385e.png",revision:null},{url:"assets/9.696249dd.png",revision:null},{url:"assets/9.c244c5ee.png",revision:null},{url:"assets/add.html.6ca15e66.js",revision:null},{url:"assets/add.html.9cf696c7.js",revision:null},{url:"assets/aglie.html.dc18fe49.js",revision:null},{url:"assets/aglie.html.f8897adf.js",revision:null},{url:"assets/ai.html.8d3a8611.js",revision:null},{url:"assets/ai.html.aa30532c.js",revision:null},{url:"assets/ai1.28e8e9f7.jpg",revision:null},{url:"assets/api.html.0e5b1061.js",revision:null},{url:"assets/api.html.3ccaacf2.js",revision:null},{url:"assets/app.544215b1.js",revision:null},{url:"assets/app.html.4b9ec687.js",revision:null},{url:"assets/app.html.6d555577.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/base_summary.html.110ffd64.js",revision:null},{url:"assets/base_summary.html.9cc01710.js",revision:null},{url:"assets/bfc.html.12f2f1e5.js",revision:null},{url:"assets/bfc.html.7dbbe739.js",revision:null},{url:"assets/bg.7c0abc90.jpg",revision:null},{url:"assets/bookmark.5fd5d5e4.png",revision:null},{url:"assets/code_review.html.4577c69d.js",revision:null},{url:"assets/code_review.html.bc3a99c0.js",revision:null},{url:"assets/code_tool1.a853bcf7.png",revision:null},{url:"assets/code_tool2.c9137f5b.png",revision:null},{url:"assets/code1.c30ce9a1.png",revision:null},{url:"assets/code2.26a6fa87.png",revision:null},{url:"assets/cola.html.bca364e5.js",revision:null},{url:"assets/cola.html.e4806231.js",revision:null},{url:"assets/confidence.html.0d77def2.js",revision:null},{url:"assets/confidence.html.7bdf24be.js",revision:null},{url:"assets/config.html.4b16ab9d.js",revision:null},{url:"assets/config.html.fa4d84dd.js",revision:null},{url:"assets/css_layout_two.html.a113e7a5.js",revision:null},{url:"assets/css_layout_two.html.ba63e39b.js",revision:null},{url:"assets/diff1.c6ac7d2c.png",revision:null},{url:"assets/diff2.abd42089.png",revision:null},{url:"assets/discipline.html.12aa4483.js",revision:null},{url:"assets/discipline.html.3f94df6c.js",revision:null},{url:"assets/doc1.7c470344.png",revision:null},{url:"assets/doc2.6948fe56.png",revision:null},{url:"assets/doc3.ea39605f.png",revision:null},{url:"assets/doc4.78968d83.png",revision:null},{url:"assets/doc5.4bf1a448.png",revision:null},{url:"assets/doc6.88dca241.png",revision:null},{url:"assets/doc7.358d1e34.png",revision:null},{url:"assets/draw.8392dd2c.png",revision:null},{url:"assets/draw1.60b38bb0.png",revision:null},{url:"assets/draw2.2ef931f4.png",revision:null},{url:"assets/emoji.html.71531376.js",revision:null},{url:"assets/emoji.html.b9989d2d.js",revision:null},{url:"assets/es6.html.13ed4360.js",revision:null},{url:"assets/es6.html.444dc297.js",revision:null},{url:"assets/fe_design.html.35f2d4e9.js",revision:null},{url:"assets/fe_design.html.d5b0b873.js",revision:null},{url:"assets/fe_server_check.html.4d7b9142.js",revision:null},{url:"assets/fe_server_check.html.9e21030d.js",revision:null},{url:"assets/fe_server_name.html.0b590244.js",revision:null},{url:"assets/fe_server_name.html.752ce7ca.js",revision:null},{url:"assets/fe_up.html.0bd58fe4.js",revision:null},{url:"assets/fe_up.html.29040e77.js",revision:null},{url:"assets/fe.html.32e43fa7.js",revision:null},{url:"assets/fe.html.3b3d8617.js",revision:null},{url:"assets/feday.html.43f3a4ee.js",revision:null},{url:"assets/feday.html.d05b3b3a.js",revision:null},{url:"assets/fn.html.470922ad.js",revision:null},{url:"assets/fn.html.83161d8e.js",revision:null},{url:"assets/for.0318d284.jpg",revision:null},{url:"assets/guide.html.e635ba5e.js",revision:null},{url:"assets/guide.html.f8df3fc6.js",revision:null},{url:"assets/hb.html.183ccde9.js",revision:null},{url:"assets/hb.html.4ad9be05.js",revision:null},{url:"assets/http.html.84b428db.js",revision:null},{url:"assets/http.html.c0b3835f.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.11af586a.js",revision:null},{url:"assets/index.html.5675f97a.js",revision:null},{url:"assets/index.html.6d01a2cb.js",revision:null},{url:"assets/index.html.878d2646.js",revision:null},{url:"assets/index.html.9170de4a.js",revision:null},{url:"assets/index.html.c356b4a5.js",revision:null},{url:"assets/index.html.f249b277.js",revision:null},{url:"assets/index.html.f721d246.js",revision:null},{url:"assets/kimi1.be8d133e.png",revision:null},{url:"assets/Layout.04cb7d83.js",revision:null},{url:"assets/loop.html.7ee50776.js",revision:null},{url:"assets/loop.html.b2fdbfd5.js",revision:null},{url:"assets/love.html.2dcaf6fa.js",revision:null},{url:"assets/love.html.fe1d48fd.js",revision:null},{url:"assets/mac_down.html.c0f6caf1.js",revision:null},{url:"assets/mac_down.html.fe6b5aa6.js",revision:null},{url:"assets/mac.html.7688e88a.js",revision:null},{url:"assets/mac.html.7efb30b7.js",revision:null},{url:"assets/maclist.html.7fcc92e6.js",revision:null},{url:"assets/maclist.html.aa2e5620.js",revision:null},{url:"assets/me.eeb300fa.jpg",revision:null},{url:"assets/money_rate.html.280fa8d1.js",revision:null},{url:"assets/money_rate.html.5c64dd80.js",revision:null},{url:"assets/need_work.html.9fd86d8c.js",revision:null},{url:"assets/need_work.html.f5d7bdee.js",revision:null},{url:"assets/npm_run.html.62065d71.js",revision:null},{url:"assets/npm_run.html.98aaa461.js",revision:null},{url:"assets/npm.html.bbe6dd28.js",revision:null},{url:"assets/npm.html.e72aa54c.js",revision:null},{url:"assets/onion.html.0b6e071f.js",revision:null},{url:"assets/onion.html.e753ceaa.js",revision:null},{url:"assets/perf.html.00d52141.js",revision:null},{url:"assets/perf.html.e8293673.js",revision:null},{url:"assets/plan.html.55213dc7.js",revision:null},{url:"assets/plan.html.eca63193.js",revision:null},{url:"assets/playcode.34bbbcb9.png",revision:null},{url:"assets/power.html.798e04a8.js",revision:null},{url:"assets/power.html.8c0a01bb.js",revision:null},{url:"assets/process.html.621f9d31.js",revision:null},{url:"assets/process.html.e4c0ea35.js",revision:null},{url:"assets/project_template.html.288c3dcc.js",revision:null},{url:"assets/project_template.html.d324172e.js",revision:null},{url:"assets/promise_all.html.503af5ab.js",revision:null},{url:"assets/promise_all.html.56588555.js",revision:null},{url:"assets/prototype.html.c216cc4e.js",revision:null},{url:"assets/prototype.html.f8f3daba.js",revision:null},{url:"assets/q.218d071b.png",revision:null},{url:"assets/quick_app.html.15df73fd.js",revision:null},{url:"assets/quick_app.html.fe111499.js",revision:null},{url:"assets/read.html.4f83756f.js",revision:null},{url:"assets/read.html.83444f6d.js",revision:null},{url:"assets/security.html.2df88e0c.js",revision:null},{url:"assets/security.html.80097fc7.js",revision:null},{url:"assets/serviceWorker.html.4000b715.js",revision:null},{url:"assets/serviceWorker.html.b0bb1370.js",revision:null},{url:"assets/sh.html.8b4b0b9b.js",revision:null},{url:"assets/sh.html.b3bcdabe.js",revision:null},{url:"assets/sh1.bff49fc5.jpg",revision:null},{url:"assets/sh2.69819380.jpg",revision:null},{url:"assets/sh3.d3bc77a2.jpg",revision:null},{url:"assets/sh4.29730505.jpg",revision:null},{url:"assets/soul.html.768e71af.js",revision:null},{url:"assets/soul.html.7a468f76.js",revision:null},{url:"assets/source_link.html.b4b6c69e.js",revision:null},{url:"assets/source_link.html.e2fe27e1.js",revision:null},{url:"assets/sso.html.1d80181a.js",revision:null},{url:"assets/sso.html.908cfcd5.js",revision:null},{url:"assets/stackblitz.07fe5af1.png",revision:null},{url:"assets/style.04020ca0.css",revision:null},{url:"assets/switch_hosts.dd5d1a17.png",revision:null},{url:"assets/t1.84bdba43.png",revision:null},{url:"assets/t2.e073c8dd.png",revision:null},{url:"assets/t3.a7506b89.png",revision:null},{url:"assets/theme.html.a17dc900.js",revision:null},{url:"assets/theme.html.cab624b1.js",revision:null},{url:"assets/think.html.70b05155.js",revision:null},{url:"assets/think.html.c5b70e73.js",revision:null},{url:"assets/three.html.c55c611a.js",revision:null},{url:"assets/three.html.dde9c984.js",revision:null},{url:"assets/time.html.79f32616.js",revision:null},{url:"assets/time.html.ca2323bc.js",revision:null},{url:"assets/tool.e66a5c9c.png",revision:null},{url:"assets/ts.html.98eedc16.js",revision:null},{url:"assets/ts.html.cd7c6443.js",revision:null},{url:"assets/underline.html.237ae971.js",revision:null},{url:"assets/underline.html.4767bdd2.js",revision:null},{url:"assets/updateService.html.a5abea77.js",revision:null},{url:"assets/updateService.html.e5b5e0fd.js",revision:null},{url:"assets/v8.html.6652cf23.js",revision:null},{url:"assets/v8.html.ea1267dc.js",revision:null},{url:"assets/vEmoji.0e5dca0e.js",revision:null},{url:"assets/vHome.d34295f9.js",revision:null},{url:"assets/vLife.38aa6e3f.js",revision:null},{url:"assets/vList.dbd392e5.js",revision:null},{url:"assets/vscode.html.35f0b950.js",revision:null},{url:"assets/vscode.html.c9f01ac7.js",revision:null},{url:"assets/vue_reload.html.50a70fdb.js",revision:null},{url:"assets/vue_reload.html.9273e1b7.js",revision:null},{url:"assets/vue_ui_contrast.html.882af597.js",revision:null},{url:"assets/vue_ui_contrast.html.c0f397da.js",revision:null},{url:"assets/webpack4.html.ad53dad8.js",revision:null},{url:"assets/webpack4.html.c0da3db6.js",revision:null},{url:"assets/webview.html.75f97d7b.js",revision:null},{url:"assets/webview.html.8973f23c.js",revision:null},{url:"assets/while.8159dde0.jpg",revision:null},{url:"assets/wx.8fb93516.jpg",revision:null},{url:"img/logo.jpg",revision:"972fcd7b2cb1d7d3bd16503ff24caf6b"},{url:"img/user.jpeg",revision:"899db463f0763bc779d1f2e0d41a70b7"},{url:"index.html",revision:"3b08e3dcafb3f49c9f9218f4cff5f022"},{url:"page/about/index.html",revision:"02d25380bf79587b0b4066b1fd62a3db"},{url:"page/ai/ai.html",revision:"3b7b5a237efd0a3c3bf017b6b63767e8"},{url:"page/app/cola.html",revision:"438889a412e1670bb726e656d5cf12f0"},{url:"page/app/quick_app.html",revision:"e99d11a5ab0e549198cd787b477c4713"},{url:"page/app/webview.html",revision:"689051f8d8a761c17c1fa2284323de76"},{url:"page/css/bfc.html",revision:"89cd34f5e82551cf32b42658933c9612"},{url:"page/css/css_layout_two.html",revision:"47cd15bd8a3c7381e0a3f4fba8811cb9"},{url:"page/js/add.html",revision:"2b76af45f3c876267c7af88c4b70a9fe"},{url:"page/js/base_summary.html",revision:"530e9902df45ef9d5c41f6c16aa64b4b"},{url:"page/js/fn.html",revision:"e1ec551fb7649172bbfaf3d200c9d871"},{url:"page/js/promise_all.html",revision:"b6496f1c67620c6c861d7a61be922510"},{url:"page/js/prototype.html",revision:"679845065b2a03099cc81d81da0ebf90"},{url:"page/js/three.html",revision:"dd1aa73159b66be7437065a7188b50ab"},{url:"page/life/aglie.html",revision:"ec0e446fe58fe7fa047c1cc11d26b8d1"},{url:"page/life/app.html",revision:"0f8b78d0de2789d0a6e5db646cd11dfc"},{url:"page/life/code_review.html",revision:"690e7bbe3fd9d72c5c33080d34d2a216"},{url:"page/life/confidence.html",revision:"949336ed7b9a01f19228ba75686829df"},{url:"page/life/discipline.html",revision:"59a8160874d81194b68a21bc490c2aad"},{url:"page/life/feday.html",revision:"355a81fd228caa9bfa7e30dc2d81cd79"},{url:"page/life/index.html",revision:"13fddbe195c1b528053f2e03cf01dd09"},{url:"page/life/love.html",revision:"fee93ebfdc605295802ae33544eebf58"},{url:"page/life/money_rate.html",revision:"dc18148b0dba0a4c492cd7c71add8d8c"},{url:"page/life/need_work.html",revision:"079feaf110d4a3308e7c3e90d3921d24"},{url:"page/life/plan.html",revision:"ec163930cda3d533824b8a4836f921de"},{url:"page/life/soul.html",revision:"f2a361aa2f64bd47558ccfaf2fc356f5"},{url:"page/life/think.html",revision:"30f3cfbed570a35ccef51de962a4158c"},{url:"page/life/time.html",revision:"358c07e370a87e29a60f2b67ca3a1afa"},{url:"page/list/emoji.html",revision:"4fea65cfd5f11ae353293b9152fe08f8"},{url:"page/list/es6.html",revision:"6b0db5b0424107b3703036b1009fbfdf"},{url:"page/list/fe_design.html",revision:"9f7c77ab2308000a4bc309aecfbbd9b4"},{url:"page/list/fe_server_check.html",revision:"a70f2045b1cd7d89cec2dd8e36888cf0"},{url:"page/list/fe_server_name.html",revision:"9f607e6138e6e59310c1cfe1db0b3aea"},{url:"page/list/fe_up.html",revision:"b751005d7f8f783c901250e7a824998c"},{url:"page/list/fe.html",revision:"7dc373bce6aa9ea46bcec9b31887e0af"},{url:"page/list/index.html",revision:"f259aca8374fc885a405d4dd802cf793"},{url:"page/list/npm_run.html",revision:"ed485a440d32268990f3a8a45783aece"},{url:"page/list/npm.html",revision:"76bbd086b5991781a549f2740604a4cc"},{url:"page/list/project_template.html",revision:"791664910fcf51c1b9f83ddb30745aee"},{url:"page/list/serviceWorker.html",revision:"891fad72684aa728d01a66128ec0aec6"},{url:"page/list/sh.html",revision:"64fd20be171412fff66b336279d2ea6a"},{url:"page/list/source_link.html",revision:"615a9fd2bdaabb5cc6e578ff79e2e26b"},{url:"page/list/sso.html",revision:"4dd44f93ecb54de9d4df28cf6012bdac"},{url:"page/list/ts.html",revision:"8eb97fa4b5cfe7d2e3e5eb8c080dffb8"},{url:"page/list/underline.html",revision:"f4ab546ed1429642e34c02e6392f118a"},{url:"page/list/updateService.html",revision:"f58cbb94ad19093f386579d4421fc30e"},{url:"page/list/webpack4.html",revision:"e65ba3151553c9f5b1f5be5b2574d687"},{url:"page/node/http.html",revision:"117b30e22b5e16b018f82062d7a2e3ac"},{url:"page/node/loop.html",revision:"eeaa9b3145579dfd748077908a3630c1"},{url:"page/node/onion.html",revision:"6e3877dc9c59639c195fa025d0cda1ec"},{url:"page/node/perf.html",revision:"42970decde6bcd9d15d81a0e1221283c"},{url:"page/node/power.html",revision:"1d97609ecc62b942c3594e358dafb71f"},{url:"page/node/process.html",revision:"fe628e7cdba1084c39f6ef77ceab60e7"},{url:"page/node/security.html",revision:"7b9a193bc6530e4fee740e8887cd03f9"},{url:"page/node/v8.html",revision:"bba1614c2dfee35d6de05c412ea1e11c"},{url:"page/read/hb.html",revision:"029e8191ca3f1002d50bc274b4c66c9a"},{url:"page/read/read.html",revision:"07e42ea244ec660e35aa71a53c32df89"},{url:"page/tools/mac_down.html",revision:"2cdabdfe6bd219dbb1229b36e8d4f1b4"},{url:"page/tools/mac.html",revision:"2747dcf0771abee21cea77e9ed55fd72"},{url:"page/tools/maclist.html",revision:"0b770d63b5c3820ce06b2a9774e6cf1f"},{url:"page/tools/vscode.html",revision:"86531ef19f20899801c41ffa1db4aacc"},{url:"page/vue/vue_reload.html",revision:"3fd106e7f9aafbdb8edf17ba8de413a9"},{url:"page/vue/vue_ui_contrast.html",revision:"a7b459b518a0cc909d7d87f4283e935c"},{url:"page/vuepress/api.html",revision:"ea2465fdcb09fa3ae58c2efb961db42e"},{url:"page/vuepress/config.html",revision:"91fadd1554d80a284dd445bf084a4f5e"},{url:"page/vuepress/guide.html",revision:"7375725792edc31b18015f4dd91d5577"},{url:"page/vuepress/theme.html",revision:"1b30cecfb6c47403269d56a2c9b39331"}],{})}));
