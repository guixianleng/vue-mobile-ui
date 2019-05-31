const path = require('path')

module.exports = {
  base:'/pl-ui/',
  title: 'Pl-Ui',
  description: 'This is for Poly',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/guixianleng/pl-ui/' },
    ],
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        children: [
          'views/guide/'
        ]
      },
      // {
      //   title: '主题',
      //   collapsable: true,
      //   children: [
      //     'views/theme/',
      //   ]
      // },
      {
        title: '组件',
        collapsable: true,
        children: [
          'views/components/toast/',
          'views/components/step/',
          'views/components/svg-icon/',
          'views/components/collapse/'
        ]
      }
    ]
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
