import React from 'react'
import { HeaderContainer, LoginButton, Logo, Nav, NavLink, NavLinks } from './Layout.styled'
import { ROUTES } from '../routes/routepaths'

const Header = () => {
  
  return (
    <HeaderContainer>
      <Nav>
        <Logo to={ROUTES.HOME}>SlippeReview</Logo>
        <NavLinks>
          <NavLink to={ROUTES.LIST}>링크장 현황</NavLink>
          <NavLink to={ROUTES.BOARD}>게시판</NavLink>
          <LoginButton to={ROUTES.LOGIN}>로그인</LoginButton>
          </NavLinks>
      </Nav>
    </HeaderContainer>
  )
}

export default Header