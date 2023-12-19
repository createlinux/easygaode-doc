import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "高德地图开放平台PHP-SDK",
  titleTemplate: 'EasyGaoDe',
  description: "高德地图开放平台PHP-SDK",
  themeConfig: {
    siteTitle:"EasyGaoDe",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: 'IP定位', link: '/ip-locator' },
          { text: '坐标转换', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/createlinux/easygaode' }
    ],
    footer: {
      message: '基于Apache 2.0 License.',
      copyright: 'Created By <a href="https://www.litchilab.com" target="_blank">荔枝实验室</a> Copyright © 2024'
    }
  }
})
