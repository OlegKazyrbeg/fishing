import { PATHS } from '../../router';
import './header.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion"

const Header = () => {
    const { items } = useSelector(state => state.card)
    const totalCount = items.reduce((sum, obj) => sum +obj.count, 0)

    const [toggleMenu, setToggleMenu] = useState(false)

    return ( 
        <motion.header className="header"
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}        
        >
            <div className="container">
                <div className="header-content row">
                    <Link to={PATHS.MAIN} className="logo">
                        <img src="/logo.png" alt="logo" width={50}/>
                        Аппетитная <br /> щучка
                    </Link>
                    <nav >
                        <ul className={`header-nav row ${toggleMenu ? "active" : ''}`}>
                            <Link to={PATHS.CATALOG} className="header-nav-item">Каталог</Link>
                            <Link to={PATHS.ABOUT} className="header-nav-item">О нас</Link>
                            <Link to={PATHS.BASKET} className="header-nav-item">корзина
                                { totalCount > 0 && <div className="card-count row">{totalCount}</div>}
                            </Link>
                            <button 
                                onClick={() => setToggleMenu(!toggleMenu)}  
                                className='close-menu'>
                                <img src="public/closeburger.svg" alt="" />
                            </button>
                        </ul>
                    </nav>
                    <button 
                        onClick={() => setToggleMenu(!toggleMenu)} 
                        className="open-menu">
                        <img src="public/openburger.svg" alt="" />
                    </button>
                </div>
            </div>
        </motion.header>
     );
}
 
export default Header;