import { PATHS } from '../../router';
import './header.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    return ( 
        <header className="header">
            <div className="container">
                <div className="header-content row">
                <Link to={PATHS.MAIN} className="logo">
                    <img src="/logo.png" alt="logo" width={50}/>
                    Аппетитная <br /> щучка
                </Link>
                <nav>
                    <ul className={`header-nav row ${toggleMenu ? "active" : ''}`}>
                        <Link to={PATHS.ABOUT} className="header-nav-item">О нас</Link>
                        <Link to={PATHS.CATALOG} className="header-nav-item">Каталог</Link>
                        <Link className="header-nav-item">link</Link>
                        <Link className="header-nav-item">link</Link>
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
        </header>
     );
}
 
export default Header;