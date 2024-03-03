import { motion } from 'framer-motion';
import './messageAdd.scss'

const MessageAdd = ({ message }) => {
    return ( 
        <motion.div 
            className={message ? 'message-add active' : 'message-add'}
            initial={{y: -9, opacity: 0 }}
            animate={{y: -20, opacity: 1}}
            transition={{duration: .35}}>
            <div>Добавлено!</div>
        </motion.div>
     );
}

export default MessageAdd