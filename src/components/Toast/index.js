import Vue from 'vue'
import vueToast from './main.vue'
import { isObj, isInDocument } from '../../utils'

const parseOptions = message => (isObj(message) ? message : { message })

let queue = []
let currentOptions = { ...vueToast.defaultOptions }

function createInstance () {
  if (!queue.length || !isInDocument(queue[0].$el)) {
    const toast = new (Vue.extend(vueToast))({
      el: document.createElement('div')
    })
    queue.push(toast)
  }
  return queue[queue.length - 1]
}

function Toast (options = {}) {
  const toast = createInstance()

  options = {
    ...currentOptions,
    ...parseOptions(options)
  }

  if (toast.$el) {
    let vm = toast.$mount()
    document.body.appendChild(vm.$el)
  }

  toast.queue.push(options)
}

const createMethod = type => options => Toast({
  type, ...parseOptions(options)
})

const arrMethod = ['loading', 'close', 'success', 'fail']
arrMethod.forEach(method => {
  Toast[method] = createMethod(method)
})

// 设置options
Toast.setDefaultOptions = options => {
  Object.assign(currentOptions, options)
}

// 重置options
Toast.resetDefaultOptions = () => {
  currentOptions = { ...Toast.defaultOptions }
}

Toast.close = () => {
  const toast = createInstance()
  const parent = toast.$el.parentNode
  if (parent) {
    parent.removeChild(toast.$el)
  }
  queue.shift()
  toast.$destroy()
}

Toast.install = () => {
  Vue.use(vueToast)
}

Vue.prototype.$vueToast = Toast

export default Toast
