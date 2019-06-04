const path = require('path')

module.exports = {
  base:'/pl-ui/',
  title: '移动端Ui组件库',
  description: 'This is for Poly',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github', link: 'https://github.com/guixianleng/pl-ui/' },
    ],
    sidebar: [
      {
        title: '组件库',
        collapsable: false,
        children: [
          'views/guide/',
          'views/components/toast/',
          'views/components/step/',
          'views/components/svg-icon/',
          'views/components/collapse/'
        ]
      }
    ]
    // sidebar: 'auto'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('../../docs'),
        'views': path.resolve('@/views')
      }
    }
  }
}
