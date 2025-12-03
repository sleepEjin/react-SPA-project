import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../routes/routepaths'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import RinkListPage from '../pages/IcelinkList'
import Board from '../pages/Board'
import Login from '../pages/Login'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTES.HOME} element={<Layout />} >
            <Route index element={<Home />}/>
            <Route path={ROUTES.LIST} element={<RinkListPage/>}/>
            <Route path={ROUTES.BOARD} element={<Board/>}/>
            <Route path={ROUTES.LOGIN} element={<Login/>}/> 
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes