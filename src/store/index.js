import React from 'react'
import LoginStore from './login.Store'

class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
  }
}

const context = React.createContext(new RootStore())
const useStore = () => React.useContext(context)

export default useStore