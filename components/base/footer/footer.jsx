import { PATHS } from '../../../router';
import './footer.scss'
import { Link } from 'react-router-dom';

const handleClickTop = () => {
    window.scrollTo(0, 0)
}

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-content-top">
                        <figure className='footer-logo'>
                            <img src="/logo.png" alt="" />
                        </figure>
                        <div className="footer-text">Интернет-магазин морепродуктов "Аппетитная щучка"</div>
                    </div>
                    <nav>
                        <ul className="footer-nav row">
                            <Link onClick={handleClickTop} to={PATHS.CATALOG}><li className="footer-nav-item">КАТАЛОГ</li></Link>
                            <Link onClick={handleClickTop} to={PATHS.ABOUT}><li className="footer-nav-item">О НАС</li></Link>
                            <Link onClick={handleClickTop} to={PATHS.BASKET}><li className="footer-nav-item">КОРЗИНА</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;