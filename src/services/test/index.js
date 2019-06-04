import request from '../../utils/request'

export async function testRequest() {
  return request('/api/test')
}