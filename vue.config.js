const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

const path = require('path')
const IS_PROD = process.env.NODE_ENV === 'production'
const cdnDomian = '/'

module.exports = {
  publicPath: IS_PROD ? cdnDomian : '/',
  configureWebpack: () => ({
    devtool: 'source-map',
    resolve: {
      // 配置项目别名
      alias: {
        '~styles': path.resolve('./src/styles'),
        'assets': path.resolve('./src/assets'),
        'components': path.resolve('./src/components'),
        'utils': path.resolve('./src/utils'),
        'views': path.resolve('./src/views')
      }
    }
  }),
  chainWebpack: config => {
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加 svg 新的 loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(path.resolve('src/assets/icons'))

    if (process.env.NODE_ENV === 'production') {
      // 图片压缩
      config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use('img-loader')
        .loader('img-loader').options({
          plugins: [
            require('imagemin-jpegtran')(),
            require('imagemin-pngquant')({
              quality: [0.75, 0.85]
            })
          ]
        })

      // 启用GZip压缩
      config
        .plugin('compression')
        .use(CompressionPlugin, {
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          cache: true
        })
        .tap(args => { })

      // 忽略生成环境打包的文件

      var externals = {
        vue: 'Vue',
        axios: 'axios',
        'vant': 'vant',
        'vue-router': 'VueRouter',
        vuex: 'Vuex'
      }
      config.externals(externals)
      const cdn = {
        css: [
          // vant css
          '//cdn.jsdelivr.net/npm/vant@1.6/lib/index.css'
        ],
        js: [
          // vue
          '//cdn.staticfile.org/vue/2.5.22/vue.min.js',
          // vue-router
          '//cdn.staticfile.org/vue-router/3.0.2/vue-router.min.js',
          // axios
          '//cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js',
          // vant js
          '//cdn.jsdelivr.net/npm/vant@1.6/lib/vant.min.js'
        ]
      }
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdn
          return args
        })

      // 分析打包体积
      if (process.env.IS_ANALYZE) {
        config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
          {
            analyzerMode: 'static'
          }
        ])
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 16,
            propList: ['*'],
            selectorBlackList: ['van-circle__layer']
          })
        ]
      },
      less: {
        modifyVars: {
          black: '#313131',
          red: '#F44',
          blue: '#666666',
          orange: '#F89516',
          green: '#268AED',
          'text-color': '#313131',
          'background-color': '#F5F5F5',
          // 按钮重置
          'button-default-height': '38px',
          'button-default-line-height': '36px',
          'button-default-font-size': '14px',
          'button-default-color': '#34394A',
          'button-default-border-color': '#DDD',
          'button-large-height': '47px',
          'button-large-line-height': '45px',
          'button-border-radius': '4px'
        }
      }
    }
  },
  lintOnSave: process.env.NODE_ENV === 'production',
  devServer: {
    // 自动打开默认浏览器
    open: true,
    hot: true,
    // 设置端口
    port: 9530,
    https: false,
    hotOnly: false,
    // 设置单个代理
    // proxy: '',
    // 配置多个代理
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
}
