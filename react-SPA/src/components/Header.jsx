import React from 'react'
import { HeaderContainer, Logo, Nav, NavLink, NavLinks } from './Layout.styled'
import { ROUTES } from '../routes/routepaths'

const Header = () => {
  
  return (
    <HeaderContainer>
      <Nav>
        <Logo to={ROUTES.HOME}>SlippeReview</Logo>
        <NavLinks>
          <NavLink to={ROUTES.LIST}>링크장 현황</NavLink>
          <NavLink to={ROUTES.LIST}>링크장 리뷰</NavLink>
          <NavLink to={ROUTES.LIST}>로그인</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  )
}

export default Header