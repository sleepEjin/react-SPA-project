// src/routes/Routes.jsx
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from './routepaths' // 경로 확인 필요
import Layout from '../components/Layout'
import Home from '../pages/Home'
import RinkListPage from '../pages/IcelinkList'
import Board from '../pages/Board'
import Login from '../pages/Login'

// Props로 로그인 관련 함수/상태를 받음
const AppRoutes = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <BrowserRouter>
        <Routes>
            {/* 1. Layout에 로그인 정보 전달 (헤더를 위해) */}
            <Route path={ROUTES.HOME} element={<Layout isLoggedIn={isLoggedIn} onLogout={onLogout} />} >
                
                <Route index element={<Home />}/>
                <Route path={ROUTES.LIST} element={<RinkListPage/>}/>
                
                {/* 2. 게시판에도 권한 정보 전달 (글쓰기 방지 위해) */}
                <Route path={ROUTES.BOARD} element={<Board isLoggedIn={isLoggedIn} />}/>
                
                {/* 3. 로그인 페이지에 로그인 함수 전달 */}
                <Route path={ROUTES.LOGIN} element={<Login onLogin={onLogin} />}/> 
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes