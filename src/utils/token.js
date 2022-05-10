const TOKEN_KEY = 'itcast_geek_pc'

const getToken = () => localStorage.getItem(TOKEN_KEY)
const setToken = token => localStorage.setItem(TOKEN_KEY, token)
const clearToken = () => localStorage.removeItem(TOKEN_KEY)
const isAuth = () => !!getToken()

export { getToken, setToken, clearToken, isAuth }