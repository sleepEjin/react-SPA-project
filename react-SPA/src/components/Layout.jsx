// src/components/Layout.jsx
import React from 'react'
import { LayoutContainer, MainContent} from './Layout.styled'
import Header from './Header'
import { Outlet } from 'react-router-dom'

// props 받기
const Layout = ({ isLoggedIn, onLogout }) => {
  return (
    <LayoutContainer>
        {/* Header에게 로그인 상태와 로그아웃 함수 전달 */}
        <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
        <MainContent>
            <Outlet />
        </MainContent>
    </LayoutContainer>
  )
}

export default Layout