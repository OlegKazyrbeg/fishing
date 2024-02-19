import PrimaryButton from '../../../ui/buttons/primaryButton';
import './basketTotal.scss'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const BasketTotal = ({setFormContent}) => {

    const cards = useSelector((state) => state.card.items)
    const [recipientEmail, setRecipientEmail] = useState('');
  
    const handleSendEmail = async () => {
      const templateId = 'template_5vbxbcc'; // Замените на ваш идентификатор шаблона
      const serviceId = 'service_cyc0tjd'; // Замените на ваш идентификатор сервиса
  
      const templateParams = {
        to_email: recipientEmail,
        cards: JSON.stringify(cards)
      };
      console.log(templateParams.cards)

      await emailjs.send(serviceId, templateId, templateParams, '46P-uyZXOGwPLne__') // Замените на ваш идентификатор пользователя
        .then((response) => {
          console.log('Email sent successfully:', response);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
        };

    return ( 
        <div className="basket-total row">
            <div className="basket-total-content">
                <div className="basket-total-image">
                    <img src="./public/total.svg" alt="total-image" />
                </div>
                <form>
                    <label> Введите почту для отправки <br />
                        <input 
                            type="email" 
                            placeholder="mail@mail.ru" 
                            name='to_email' 
                            value={recipientEmail} 
                            onChange={(e) => setRecipientEmail(e.target.value)} 
                        />
                        <button onClick={() => setFormContent(0)} type='button' className='basket-total-btn close'>
                            <span></span>
                            <span></span>
                        </button>
                    </label>
                    <div onClick={handleSendEmail} className="basket-total-btn">
                        <PrimaryButton>Отправить</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default BasketTotal;