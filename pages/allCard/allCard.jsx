import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cardSlice';
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
                const { data } = await axios.get(`http://localhost:3001/items/` + id)
                setItem(data)
            } catch (error) {
                alert('ошибка...')
            }}
            fetchItem()
    }, [])

    const dispath = useDispatch()
    const { name, price, image } = item

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
        }, 3000)
    }  

    return ( 
        <section className="card-all">
            <div className="container">
                <h2 className="card-title">{name}</h2>
                <article className="card">
                    <div className="card-top">
                        <div className='card-top-image'>
                            <img src={image} alt="image" />
                        </div>
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
                            <div className={message ? 'added active' : 'added'}>
                                <MessageAdd/>
                            </div>
                        </button>
                    </div>
                </article>
            </div>
        </section>
     );
}
 
export default AllCard;