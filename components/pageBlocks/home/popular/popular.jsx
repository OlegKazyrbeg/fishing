import 'swiper/css';
import 'swiper/css/navigation';
import './popular.scss'
import SwiperPopular from './swiperPopular';
import { motion } from 'framer-motion';

const animation = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1},
}

const Popular = () => {
    return ( 
        <motion.section className="popular"
            variants={animation}
            initial='initial'
            whileInView='whileInView'
            viewport={{ once: true }}
            transition={{ duration: .8 }}>

            <div className="container">
                <h2 className="popular-title title">ПОПУЛЯРНОЕ</h2>
                <div className="popular-slider">
                    <SwiperPopular/>
                </div>
            </div>
        </motion.section>
     );
}
 
export default Popular;