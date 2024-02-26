import './aboutMap.scss'
import { motion } from 'framer-motion';

const animation = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1},
}

const AboutMap = () => {
    return ( 
        <motion.section className="about-map"
            variants={animation}
            initial='initial'
            whileInView='whileInView'
            viewport={{ once: true }}
            transition={{ duration: 0.8 , delay: 0.15 }}>
            <div className="container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90188.07937687452!2d38.91527361152182!3d45.05785313844365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04564714535b3%3A0xf720794f56c4beb6!2z0JrRgNCw0YHQvdC-0LTQsNGALCDQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuQ!5e0!3m2!1sru!2sru!4v1708959462943!5m2!1sru!2sru"></iframe>
            </div>
        </motion.section>
     );
}
 
export default AboutMap;