import axios from 'axios'
import router from '../router'
import { Toast } from 'vant'
import vueToast from '../components/Toast'

const service = axios.create({
  // 设置超时时间
  timeout: 10 * 1000,
  baseURL: process.env.VUE_APP_BASE_API
})

service.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
service.interceptors.request.use(config => {
  /**
   * 是否需要开启loading动画
   * 1.可以在接口处定义 options 为 isLoad
   * 2.method 为put、post、delete才会有加载动画
   */
  const isOpen = /^(post)|(put)|(delete)$/i.test(config.method) || config.options === 'isLoad'
  if (isOpen) {
    vueToast.loading()
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use(response => {
  // 关闭加载动画
  vueToast.close()
  const res = response.data
  if (res.status === 0) {
    return Promise.resolve(res.data)
  } else {
    Toast({
      message: res.message,
      type: 'fail',
      duration: 2000,
      onClose () { // 错误回退至上级页面
        router.go(-1)
      }
    })
    return Promise.reject(res)
  }
}, error => {
  // 关闭加载动画
  vueToast.close()
  // 断网 或者 请求超时 状态
  if (!error.res) {
    // 请求超时状态
    if (error.message.includes('timeout')) {
      Toast.fail('请求超时，请检查网络!')
    } else {
      // 可以展示断网组件
      Toast.fail('请求失败，请检查网络!')
    }
    return
  }
  // 服务器返回不是 2 开头的情况，会进入这个回调
  // 可以根据后端返回的状态码进行不同的操作
  switch (error.res.status) {
    case 401:
      // 跳转指定页面
      router.replace({
        path: 'xx',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
      break
    // 404请求不存在
    case 404:
      Toast.fail('网络请求不存在!')
      break
    // 其他错误，直接抛出错误提示
    default:
      Toast.fail(error.res.data.message)
  }
  return Promise.reject(error)
})

export default service
