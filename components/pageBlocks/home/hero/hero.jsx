import { PATHS } from '../../../../router';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../ui/buttons/primaryButton';
import './hero.scss'

const Hero = () => {
    return ( 
        <section className="hero row">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">Свежие морепродукты<br /> <span>Прямо на вашем столе!</span> </h1>
                    <Link to={PATHS.CATALOG}>
                        <PrimaryButton>Подробнее</PrimaryButton>
                    </Link>
                </div>
            </div>
        </section> 
     );
}
 
export default Hero;