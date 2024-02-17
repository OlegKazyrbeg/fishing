import './aboutContent.scss'
import { motion } from 'framer-motion';

const animation = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1}
}

const About = () => {
    return ( 
        <section className="about">
            <div className="container">
                <motion.h2 className="about-title title"
                    variants={animation}
                    initial='initial'
                    animate='animate'
                    viewport={{ once: true }} 
                    transition={{ duration: 0.8 , delay: 0.5 }}>
                О НАС</motion.h2>
                    
                <div className="about-content">
                    <motion.p className="about-content-text"
                        variants={animation}
                        initial='initial'
                        animate='animate'
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8 , delay: 0.65 }}>
                    Мы стремимся к тому, чтобы каждый клиент нашего магазина мог насладиться изысканными вкусами и питательными свойствами морепродуктов, предлагаемых нами.</motion.p>
                    <motion.div className="about-we row"
                        variants={animation}
                        initial='initial'
                        animate='animate'
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8 , delay: 0.75 }}>
                        <div className="about-we-description">
                            <p className="about-we-text"><span>Наше видение</span> - продвигать здоровый образ жизни и кулинарные возможности, которые предлагают нам океаны.</p>
                            <img src="./public/about.jpg" alt="aboutTopImg" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
     );
}
 
export default About;