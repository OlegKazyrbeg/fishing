import './basketContent.scss'
import BasketCard from './basketCard/basketCard';
import basketIcon from '/public/basket-icon.png'
import deleteIcon from '/public/trash-icon.png'
import { useSelector, useDispatch } from 'react-redux';
import { clearItem } from '../../../redux/slices/cardSlice';
import BasketEmpty from './basketEmpty/basketEmpty';
import PrimaryButton from '../../ui/buttons/primaryButton';
import BasketTotal from './basketTotal/basketTotal';
import { useState } from 'react';


const Basket = () => {
    const { totalPrice, items } = useSelector(state => state.card)   
    const totalCount = items.reduce((sum, obj) => sum + obj.count, 0)
    const cards = useSelector((state) => state.card.items)

    const [formContent, setFormContent] = useState()
    const [sucsess, setSucsess] = useState()

    const dispath = useDispatch()

    const onClickClear = () => {
        dispath(clearItem())
    }

    if (!totalPrice) {
        return <BasketEmpty sucsess={sucsess} />
    }

    return (
        <section className="basket">
            <div className="container">
                <div className="basket-top row">
                    <div className="basket-top-names row">
                        <img src={basketIcon} alt="basket-icon" width={33} />
                        <h2 className="basket-title title">КОРЗИНА</h2>
                    </div>
                    <button onClick={onClickClear} className="basket-top-button row"><img src={deleteIcon} alt="basket-delete" width={30} /><span>Очистить корзину</span></button>
                </div>
                <div className="basket-content row">
                    {cards.map(item => <BasketCard key={item.id} {...item} />)}
                    <div className="basket-content-bottom row">
                        <div className="basket-content-count">Всего кол-во: {totalCount} шт.</div>
                        <div className="basket-content-price">Всего сумма: {totalPrice} руб.</div>
                    </div>
                </div>
                <div className='basket-button' onClick={() => setFormContent(1)}>
                    <PrimaryButton>Oформить</PrimaryButton>
                </div>
            </div>
            <div className={formContent ? 'total-wrap active' : 'total-wrap'}>
                <BasketTotal 
                    setFormContent={setFormContent} 
                    totalPrice={totalPrice}
                    totalCount={totalCount}
                    cards={cards}
                    setSucsess={setSucsess}
                    onClickClear={onClickClear}
                />
            </div>
        </section>
    );
}

export default Basket;