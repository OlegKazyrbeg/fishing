import { Route, Routes } from 'react-router-dom'
import Home from "../pages/home/home"
import About from '../pages/about/about'
import Catalog from '../pages/catalog/catalog'
import Basket from '../pages/basket/basket'
import AllCard from '../pages/allCard/allCard'

export const PATHS = {
    MAIN: '/',
    CATALOG: '/catalog',
    ABOUT: '/about',
    BASKET: '/basket',
    ALL_CARD: '/card/:id'
}

export const router = () =>(
    <Routes>
        <Route path={ PATHS.MAIN } element={<Home/>}/>
        <Route path={ PATHS.CATALOG } element={<Catalog/>}/>
        <Route path={ PATHS.ALL_CARD } element={<AllCard/>} />
        <Route path={ PATHS.ABOUT } element={<About/>}/>
        <Route path={ PATHS.BASKET} element={<Basket/>}/>
    </Routes>
)