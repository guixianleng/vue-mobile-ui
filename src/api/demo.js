import request from '@/utils/request'

// 上传头像接口示例
export function uploadFile (data) {
  return request({
    method: 'post',
    url: '/upload',
    data: data
  })
}
