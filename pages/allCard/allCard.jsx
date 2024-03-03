import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cardSlice';
import { motion } from 'framer-motion';
import axios from 'axios';
import MessageAdd from '../../components/base/card/messageAdd/messageAdd';
import './allCard.scss'

const AllCard = () => {
    const { id } = useParams()
    const [ item, setItem ] = useState('')
    const [ message, setMessage ] = useState(0)

    useEffect(() => {
        async function fetchItem() {
            try {
                const { data } = await axios.get(`http://localhost:3001/itemCategory/` + id)
                setItem(data)
            } catch (error) {
                
            }}
            fetchItem()
    }, [])

    const dispath = useDispatch()
    const name = item.name
    const price = item.price
    const image = item.image

    const onClickAdd = () =>{
        const item = {
            name,
            price,
            image,  
        }

        dispath(addItem(item))

        setMessage(1)
        setTimeout(() => {
            setMessage(0)
        }, 3000)
    }  

    return ( 
        <section className="card-all">
            <div className="container">
                <h2 className="card-title">{name}</h2>
                <article className="card">
                    <div className="card-top">
                        <img src={image} alt="image" />
                        <div className="card-description">
                            <p>{item.desc1}</p>
                            <p>{item.desc2}</p>
                            <p>{item.desc3}</p>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className='card-bottom-total'>Цена за 1кг: <span>{price} руб.</span></div>
                        <button onClick={onClickAdd}>
                            ДОБАВИТЬ
                            <motion.div
                                className={message ? 'added active' : 'added'}
                                initial={{x: 0, opacity: 0 }}
                                animate={{x: 60, opacity: 1}}
                                transition={{duration: .35}}>
                                <MessageAdd/>
                            </motion.div>
                        </button>
                    </div>
                </article>
            </div>
        </section>
     );
}
 
export default AllCard;