import './card.scss'
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/slices/cardSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MessageAdd from './messageAdd/messageAdd'

const Card = ({ image, name, price, id }) => {
    const [ message, setMessage ] = useState(0)
    const dispath = useDispatch()

    const onClickAdd = () =>{
        const item = {
            id,
            name,
            price,
            image,  
        }

        dispath(addItem(item))

        setMessage(1)
        setTimeout(() => {
            setMessage(0)
        }, 3000);
    }  

    return ( 
        <article className="category-card">
            <Link to={`/card/${id}`}>
                <img src={image} alt="card" />
            </Link>
            <div className="category-card-description">
                <div className="category-card-name">{name}</div>
                <div className="category-card-bottom row">
                    <div className="category-card-price">{price} руб.</div>
                    <button onClick={onClickAdd} className="category-card-button">ДОБАВИТЬ</button>
                    <div className={message ? 'message active' : 'message'}>
                        <MessageAdd/>
                    </div>
                </div>
            </div>
        </article>
     );
}
 
export default Card;