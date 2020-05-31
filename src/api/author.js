import request from '@/utils/request'

export function getAuthorList(params) {
  return request({
    url:'/author/getAuthorList',
    method:'get',
    params:params
  })
}

export function add(data) {
  return request({
    url:'/author/add',
    method:'post',
    data:data
  })
}

export function getAuthor(id) {
  return request({
    url:'/author/getUpdateInfo/'+id,
    method:'get',
  })
}

export function updateAuthor(id,data) {
  return request({
    url:'/author/updateAuthor/'+id,
    method:'post',
    data:data,
  })
}
