import request from '@/utils/request'

export default {
  // 积分总数
  integralAmount (id) {
    return request({
      url: '/point-mgt/point/' + id,
      method: 'get'
    })
  },
  // 配置积分数
  setIntegral (params) {
    return request({
      url: '/point-mgt/point/config',
      method: 'get',
      params
    })
  },
  // 积分领取记录
  integralRecord (id) {
    return request({
      url: '/point-mgt/point/log/app/' + id,
      method: 'get'
    })
  },
  // 积分规则
  integralRules () {
    return request({
      url: '/point-mgt/point/rule',
      method: 'get'
    })
  },
  // 是否达到邀请的上限
  toLimit (id) {
    return request({
      url: '/point-mgt/point/shareInvite/' + id,
      method: 'post'
    })
  },
  // 积分首页消息
  integralNotice (id) {
    return request({
      url: '/point-mgt/point/log/app/message/' + id,
      method: 'get'
    })
  },
  // 关闭消息 积分邀请次数置零
  deleteNotice (data) {
    return request({
      url: '/point-mgt/point/log/app/message',
      method: 'post',
      data: JSON.stringify(data)
    })
  }
}
