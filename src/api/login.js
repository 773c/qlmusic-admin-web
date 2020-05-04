import { request } from '@/utils/request'

export function login(account, password) {
  return request({
    url: '/admin/login',
    method: 'post',
    data: {
      account,
      password
    }
  })
}

export function test() {
  return request({
    url: '/author/getAuthorList',
    method: 'get',
  })
}
