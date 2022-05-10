import { makeAutoObservable } from 'mobx'
import { service, getToken, setToken } from '@/utils'
import { message } from 'antd'
const { login } = service

class LoginStore {
  token = getToken() || ''

  constructor() {
    makeAutoObservable(this)
  }

  login (mobile, code) {
    return login(mobile, code).then(res => {
      this.token = res.data.token
      setToken(this.token)
      return Promise.resolve(this.token)
    }).catch(error => {
      return Promise.reject(error)
    })
  }
}

export default LoginStore