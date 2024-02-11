import { useDispatch } from 'react-redux';
import './basketCard.scss'
import { minusItem, removeItem, addItem } from '../../../../redux/slices/cardSlice';

const BasketCard = ({ image, name, price, count, id }) => {
    const dispath = useDispatch()

    const onCliclPlus = () =>{
        dispath(addItem({
            id,
        }))
    }

    const onCliclMinus = () =>{
        dispath(minusItem(id))
    }

    const onClickRemove = () =>{
        dispath(removeItem(id))
    }

    return ( 
        <article className="basket-card row">
            <div className="basket-card-description row">
                <img src={image} alt="" width={240}/>
                <h1 className="basket-card-title">{name}</h1>
            </div>
            <div className="basket-card-right row">
                <div className="basket-card-count row">
                    <div className="basket-card-count-top row">
                        <button onClick={onCliclMinus} className="card-count-button count-delete">убавить</button>
                        <div className="card-count">{count}</div>
                        <button onClick={onCliclPlus} className="card-count-button count-add">добавить</button>
                    </div>
                    <div className="basket-card-price row">{price} руб.</div>
                </div>
                <button onClick={onClickRemove} className="basket-card-delete">delete</button>
            </div>
        </article>
     );
}
 
export default BasketCard;