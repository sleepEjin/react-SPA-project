// src/components/Header.jsx
import React from 'react'
import { HeaderContainer, LoginButton, Logo, Nav, NavLink, NavLinks, LogoutButton } from './Layout.styled' // LogoutButton 추가 필요 (아래 참조)
import { ROUTES } from '../routes/routepaths'

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to={ROUTES.HOME}>SlippeReview</Logo>
        <NavLinks>
          <NavLink to={ROUTES.LIST}>링크장 현황</NavLink>
          <NavLink to={ROUTES.BOARD}>게시판</NavLink>
          
          {/* 조건부 렌더링: 로그인 상태면 로그아웃 버튼, 아니면 로그인 버튼 */}
          {isLoggedIn ? (
            <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
          ) : (
            <LoginButton to={ROUTES.LOGIN}>로그인</LoginButton>
          )}
          
        </NavLinks>
      </Nav>
    </HeaderContainer>
  )
}

export default Header