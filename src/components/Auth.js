import { isAuth } from '@/utils'
import { Navigate } from 'react-router-dom'

function Auth ({ children }) {
  if (isAuth()) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" replace></Navigate>
  }
}

export default Auth