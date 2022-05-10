import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import Article from '@/pages/Article'
import Home from '@/pages/Home'
import Publish from '@/pages/Publish'
import Auth from '@/components/Auth'
import { isAuth } from '@/utils'
import { Navigate } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Auth>
              <Layout />
            </Auth>
          }>
            <Route index element={<Home />} />
            <Route path="article" element={<Article />} />
            <Route path="publish" element={<Publish />} />
          </Route>
          <Route path="/login" element={
            isAuth() ? <Navigate to="/" replace /> : <Login />
          }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
