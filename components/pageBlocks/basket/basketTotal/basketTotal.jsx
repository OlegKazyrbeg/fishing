import { FALSE } from 'sass';
import PrimaryButton from '../../../ui/buttons/primaryButton';
import BasketLoading from '../basketLoading/basketLoading';
import './basketTotal.scss'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const BasketTotal = ({ setFormContent, cards, totalCount, totalPrice }) => {

    const getCartTemplate = (cards, totalCount, totalPrice) => (
        `<table style="width:100%; border-collapse: collapse;">
            <tr style="background:black; color:white; font-size: 18px;">
                <td style="padding: 20px; text-align: center; border: 2px solid black">Наименование</td>
                <td style="padding: 20px; text-align: center; border: 2px solid black">Количество</td>
                <td style="padding: 20px; text-align: center; border: 2px solid black">Сумма</td>
            </tr style="">
            ${cards.map((item) => {
            return `<tr style="">
                        <td style="padding: 10px; border: 2px solid grey">${item.name}</td>
                        <td style="padding: 10px; border: 2px solid grey">${item.count}</td>
                        <td style="padding: 10px; border: 2px solid grey">${item.price} руб.</td>
                    </tr>`
            })}
        </table>
            <div style="padding: 10px">
                <div>Всего количество: ${totalCount} шт.</div>
                <div>Всего сумма: ${totalPrice} руб.</div>
            </div>
        `   
    )

    const [recipientEmail, setRecipientEmail] = useState('');

    const handleSendEmail = async () => {
        const templateId = 'template_5vbxbcc'; // Замените на ваш идентификатор шаблона
        const serviceId = 'service_cyc0tjd'; // Замените на ваш идентификатор сервиса

        const templateParams = {
            to_email: recipientEmail,
            my_html: getCartTemplate(cards, totalCount, totalPrice)
        };

        await emailjs.send(serviceId, templateId, templateParams, '46P-uyZXOGwPLne__') // Замените на ваш идентификатор пользователя
            .then(() => {
                alert('Готово!')
                setFormContent(0)
            })
            .catch(() => {
                alert('Ошибка:(')
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