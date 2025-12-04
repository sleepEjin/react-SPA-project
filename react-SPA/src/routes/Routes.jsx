import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from './routepaths'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import RinkListPage from '../pages/IcelinkList'
import Board from '../pages/Board'
import Login from '../pages/Login'
import PostDetail from '../pages/PostDetail'
import PostWrite from '../pages/PostWrite'
import MyPage from '../pages/MyPage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTES.HOME} element={<Layout />} >
                <Route index element={<Home />}/>
                <Route path={ROUTES.LIST} element={<RinkListPage/>}/>
                
                <Route path={ROUTES.RINK_BOARD} element={<Board />}/>
                
                <Route path={ROUTES.BOARD_DETAIL} element={<PostDetail />}/>
                <Route path={ROUTES.BOARD_WRITE} element={<PostWrite />}/>
                <Route path={ROUTES.RINK_BOARD_WRITE} element={<PostWrite />}/>
                
                <Route path={ROUTES.LOGIN} element={<Login />}/>
                <Route path={ROUTES.MYPAGE} element={<MyPage />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes