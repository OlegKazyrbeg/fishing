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
               <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3c416a7d8ea7f3ec188868c7548d9049466d56ced3d8fbe124efd3040d4e00c0&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
            </div>
        </motion.section>
     );
}
 
export default AboutMap;