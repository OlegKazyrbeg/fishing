import './aboutTeamCard.scss'
import { motion } from 'framer-motion';

const animation = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1},
}

const AboutTeamCard = ({ name, image, secondName, specialization }) => {
    return ( 
        <motion.article className="about-card row"
            variants={animation}
            initial='initial'
            whileInView='whileInView'
            viewport={{ once: true }}
            transition={{ duration: 0.8 , delay: 0.2 }}>

            <img src={image} alt="aboutCard" width={200}/>
            <div className="about-card-description">
                <div className="about-card-name">{name} {secondName}</div>
                <div className="about-card-specialization">{specialization}</div>
            </div>
        </motion.article>
     );
}
 
export default AboutTeamCard;