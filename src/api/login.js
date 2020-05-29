import request from '@/utils/request'

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
export function getInfo() {
  return request({
    url:'/admin/info',
    method:'get'
  })
}
export function logout() {
  return request({
    url:'/admin/logout',
    method:'post'
  })
}

export function test() {
  return request({
    url: '/author/getAuthorList',
    method: 'get',
  })
}
