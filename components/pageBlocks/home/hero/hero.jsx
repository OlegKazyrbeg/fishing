import { PATHS } from '../../../../router';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import PrimaryButton from '../../../ui/buttons/primaryButton';
import './hero.scss'

const animation = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1}
}

const Hero = () => {
    return ( 
        <section className="hero row">
            <div className="container">
                <div className="hero-content">
                    <motion.h1 className="hero-title"
                        variants={animation}
                        initial='initial'
                        animate='animate'
                        transition={{ duration: 0.8, delay: 0.8 }}>
                        Свежие морепродукты<br /> <span>Прямо на вашем столе!</span>
                    </motion.h1>
                    <Link to={PATHS.CATALOG}>
                        <motion.div className="hero-btn"
                            variants={animation}
                            initial='initial'
                            animate='animate'
                            transition={{ duration: 0.8, delay: 0.95 }}>
                            <PrimaryButton>Подробнее</PrimaryButton>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section> 
     );
}
 
export default Hero;