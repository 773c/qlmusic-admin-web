import { request } from '@/utils/request'

export function getAuthorList(params) {
  return request({
    url:'/author/getAuthorList',
    method:'get',
    params:params
  })
}
