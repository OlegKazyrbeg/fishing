import './basketContent.scss'
import BasketCard from './basketCard/basketCard';
import basketIcon from '/public/basket-icon.png'
import deleteIcon from '/public/trash-icon.png'

const Basket = () => {
    return ( 
        <section className="basket">
            <div className="container">
                <div className="basket-top row">
                    <div className="basket-top-names row">
                        <img src={basketIcon} alt="basket-icon" width={33} />
                        <h2 className="basket-title title">КОРЗИНА</h2>
                    </div>
                    <button className="basket-top-button row"><img src={deleteIcon} alt="basket-delete" width={30} />Очистить корзину</button>
                </div>
                <div className="basket-content row">
                    {new Array(3).fill(0).map((item, i) => (
                        <BasketCard key={i}/>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default Basket;