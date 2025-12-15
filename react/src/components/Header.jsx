import React from 'react'
import { HeaderContainer, LoginButton, Logo, Nav, NavLink, NavLinks, LogoutButton } from './Layout.styled'
import { ROUTES } from '../routes/routepaths'
import { useUserStore } from '../stores/useUserStore'

const Header = () => {
  const { currentUser, logout } = useUserStore();

  return (
    <HeaderContainer>
      <Nav>
        <Logo to={ROUTES.HOME}>SlippeReview</Logo>
        <NavLinks>
          <NavLink to={ROUTES.LIST}>링크장 현황</NavLink>  
          {currentUser ? (
            <>
              <NavLink to={ROUTES.MYPAGE}>마이페이지</NavLink> 
              <LogoutButton onClick={logout}>로그아웃</LogoutButton>
            </>
          ) : (
            <LoginButton to={ROUTES.LOGIN}>로그인</LoginButton>
          )}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  )
}

export default Header