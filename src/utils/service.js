import { http } from './http'

// 用户登录
function login (mobile, code) {
  return http.post('/authorizations', {
    mobile,
    code
  })
}

export default {
  login
}