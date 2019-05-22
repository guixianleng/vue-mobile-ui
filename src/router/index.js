import Vue from 'vue'
import Router from 'vue-router'
import Index from 'views/index.vue'
import welcome from '@/views/welcome/index.vue'

Vue.use(Router)

const IndexRoute = {
  path: '/',
  component: Index,
  redirect: '/welcome',
  children: []
}

let routes = [
  IndexRoute,
  {
    path: '/welcome',
    component: welcome,
    name: 'Welcome',
    meta: {
      title: '组件库'
    }
  },
  {
    path: '*',
    redirect: '/welcome'
  }
]

const routerContext = require.context('./modules', true, /\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 、不处理
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  /**
  * 兼容 import export 和 require module.export 两种规范
  */
  IndexRoute.children = [...IndexRoute.children, ...(routerModule.default || routerModule)]
})

export default new Router({
  mode: 'hash',
  routes: routes
})
