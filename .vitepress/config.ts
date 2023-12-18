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
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/createlinux/easygaode' }
    ]
  }
})
