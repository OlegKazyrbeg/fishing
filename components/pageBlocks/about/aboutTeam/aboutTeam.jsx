import './aboutTeam.scss'
import AboutTeamCard from './aboutTeamCard/aboutTeamCard';
import { motion } from 'framer-motion';

const teamCards = [
    {
        name: 'Ирина',
        secondName: 'Петрова',
        specialization: 'Oснователь и руководитель проекта',
    },
    {
        name: 'Алексей',
        secondName: 'Иванов',
        specialization: 'Шеф-повар с многолетним опытом работы',
    },
    {
        name: 'Мария',
        secondName: 'Сидорова',
        specialization: 'Специалист по закупкам и качеству продукции',
    },
    {
        name: 'Дмитрий',
        secondName: 'Николаев',
        specialization: 'Менеджер по работе с клиентами',
    },
]

const animation = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1},
}

const AboutTeam = () => {
    return ( 
        <section className="about-team">
            <div className="container">
                <motion.h2 className="about-team-title"
                    variants={animation}
                    initial='initial'
                    whileInView='whileInView'
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 , delay: 0.15 }}>
                    НАША КОМАНДА</motion.h2>
                <div className="about-team-content row">
                    {teamCards.map(item => <AboutTeamCard key={item.key} {...item}/>)
                    }
                </div>
            </div>
        </section>
     );
}
 
export default AboutTeam;