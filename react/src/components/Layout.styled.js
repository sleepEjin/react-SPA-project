import { Link } from "react-router-dom"
import styled from "styled-components"

export const LayoutContainer = styled.div`
    min-height: 100vh;
    background: #f3f2f2;
`

export const HeaderContainer = styled.header`
    background: #ffffff;
    padding: 0 24px;
`

export const Nav = styled.nav`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
`

export const Logo = styled(Link)`
    font-size: 24px;
    font-weight: 900;
    color: #5833ffff;
    text-decoration: none;

    &:hover{
        color: #3c16e4ff;
        scale: 1.02;
    }
`

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

export const NavLink = styled(Link)`
    color: #333;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 12px;
    transition: all 0.2s;
    border-radius: 4px;
    font-weight: 600;
    
    &:hover{
        color: #5833ffff;
        background: #f0f0f0;
    }

    &.active{
        color: #5833ffff;
        background: #ffffff;
    }
`

export const LoginButton = styled(Link)`
    padding: 10px 20px;
    background: #5833ffff;;
    color: white;
    text-decoration: none; 
    border-radius: 5px;
  
  &:hover {
    background: #5833ffd7;
    color: white;
  }
`

export const LogoutButton = styled.button`
    padding: 10px 20px;
    background: #ff9090ff; /* 로그아웃은 회색 계열 */
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  
  &:hover {
    background: #ffd1d1ff;
  }
`

export const MainContent = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
`