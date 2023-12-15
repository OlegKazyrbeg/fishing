import PrimaryButton from '../../../../ui/buttons/primaryButton';
import './hero.scss'

const Hero = () => {
    return ( 
        <section className="hero row">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">Улови свою мечту <br /> <span>Все для рыбалки в одном магазине!</span> </h1>
                    <PrimaryButton/>
                </div>
            </div>
        </section> 
     );
}
 
export default Hero;