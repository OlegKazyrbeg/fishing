import { Route, Routes } from 'react-router-dom'
import Home from "../pages/home/home"
import About from '../pages/about/about'
import Catalog from '../pages/catalog/catalog'

export const PATHS = {
    MAIN: '/',
    CATALOG: '/catalog',
    ABOUT: '/about'
}

export const router = () =>(
    <Routes>
        <Route path={ PATHS.MAIN } element={<Home/>}/>
        <Route path={ PATHS.CATALOG }element={<About/>}/>
        <Route path={ PATHS.ABOUT }element={<Catalog/>}/>
    </Routes>
)