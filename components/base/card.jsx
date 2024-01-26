import './card.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cardSlice';

const Card = ({ image, name, price, id }) => {
    const dispath = useDispatch()
    const cardItem= useSelector((state)=> state.card.items.find((obj) => obj.id === id))

    const addedCount = cardItem ? cardItem.count : 0

    const onClickAdd = () =>{
        const item = {
            id,
            name,
            price,
            image
        }
        dispath(addItem(item))
    }

    return ( 
        <article className="category-card">
            <img src={image} alt="card" />
            <div className="category-card-description">
                <div className="category-card-name">{name}</div>
                <div className="category-card-bottom row">
                    <div className="category-card-price">{price} руб. <span>1 кг</span></div>
                    <button onClick={onClickAdd} className="category-card-button">ДОБАВИТЬ</button>
                </div>
            </div>
            { addedCount > 0 && <div className="category-card-count row">{addedCount}</div>}
        </article>
     );
}
 
export default Card;