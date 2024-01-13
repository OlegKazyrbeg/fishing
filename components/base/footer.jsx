import PrimaryButton from '../ui/buttons/primaryButton';
import './footer.scss'

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
                            <li className="footer-nav-item">LINK</li>
                            <li className="footer-nav-item">LINK</li>
                            <li className="footer-nav-item">LINK</li>
                            <li className="footer-nav-item">LINK</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;