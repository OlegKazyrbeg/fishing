import PrimaryButton from '../../../ui/buttons/primaryButton';
import './basketTotal.scss'


const BasketTotal = ({setFormContent}) => {

    return ( 
        <div className="basket-total row">
            <div className="basket-total-content">
                <div className="basket-total-image">
                    <img src="./public/total.svg" alt="total-image" />
                </div>
                <form action="">
                    <label> Введите почту для отправки <br />
                        <input type="email" placeholder="mail@mail.ru" />
                        <button onClick={() => setFormContent(0)} type='button' className='basket-total-btn'>
                            <span></span>
                            <span></span>
                        </button>
                    </label>
                    <PrimaryButton>Отправить</PrimaryButton>
                </form>
            </div>
        </div>
     );
}
 
export default BasketTotal;