import { PATHS } from '../../router';
import './header.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const { items } = useSelector(state => state.card)
    const totalCount = items.reduce((sum, obj) => sum +obj.count, 0)

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
                            <Link to={PATHS.CATALOG} className="header-nav-item">Каталог</Link>
                            <Link to={PATHS.ABOUT} className="header-nav-item">О нас</Link>
                            <Link to={PATHS.BASKET} className="header-nav-item">корзина
                                { totalCount > 0 && <div className="card-count row">{totalCount}</div>}
                            </Link>
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