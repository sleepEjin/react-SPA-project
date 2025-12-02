import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../routes/routepaths'
import Layout from '../components/Layout'
import Home from '../pages/Home'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTES.HOME} element={<Layout />} >
                <Route index element={<Home />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes