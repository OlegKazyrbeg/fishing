import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './allCard.module.scss'
import axios from 'axios';
import MessageAdd from '../../components/base/card/messageAdd/messageAdd';

const AllCard = () => {
    const { id } = useParams()
    const [ item, setItem ] = useState('')

    useEffect(() => {
        async function fetchItem() {
            try {
                const { data } = await axios.get(`http://localhost:3001/itemCategory/` + id)
                setItem(data)
            } catch (error) {
                alert('ошибка...')
            }}
            fetchItem()
    }, [])

    return ( 
        <section className={classes.card__all}>
            <div className="container">
                <h2 className={classes.title}>{item.name}</h2>
                <article className={classes.card}>
                    <div className={classes.card__top}>
                        <img src={item.image} alt="image" />
                        <div className={classes.card__description}>
                            <p>{item.desc1}</p>
                            <p>{item.desc2}</p>
                            <p>{item.desc3}</p>
                        </div>
                    </div>
                    <div className={classes.card__bottom}>
                        <div>Цена за 1кг: <span>{item.price} руб.</span></div>
                        <button>
                            ДОБАВИТЬ
                            <MessageAdd/>
                        </button>
                    </div>
                </article>
            </div>
        </section>
     );
}
 
export default AllCard;