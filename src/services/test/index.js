import request from '../../utils/request'

export async function testRequest() {
  return request('/api/test')
}

//跨域测试
export async function testCors() {
  return request('/api/ajax/movieOnInfoList?token=')
}