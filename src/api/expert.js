import request from '@/utils/request'

export default {
  // 选择专家列表
  expertList (params, options) {
    return request({
      url: '/point-mgt/expert/subscribe/list',
      method: 'get',
      params,
      options
    })
  },
  // 领域列表
  fieldList (params) {
    return request({
      url: '/point-mgt/expert/domain/list',
      method: 'get',
      params
    })
  },
  // 查询专家详情
  expertDetail (id) {
    return request({
      url: '/point-mgt/expert/' + id,
      method: 'get'
    })
  },
  // 预约专家
  subscribeExpert (data) {
    return request({
      url: '/point-mgt/expert/subscribe/add',
      method: 'post',
      data: JSON.stringify(data)
    })
  }
}
