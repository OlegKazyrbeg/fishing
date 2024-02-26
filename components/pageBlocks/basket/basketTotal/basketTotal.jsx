import './basketTotal.scss'
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"

const BasketTotal = ({ setFormContent, cards, totalCount, totalPrice }) => {

    const getCartTemplate = (cards, totalCount, totalPrice) => (
        `<table style="width:100%; border-collapse: collapse;">
            <tr style="background:black; color:white; font-size: 18px;">
                <td style="padding: 10px; text-align: center; border: 1px solid black">Наименование</td>
                <td style="padding: 10px; text-align: center; border: 1px solid black">Количество</td>
                <td style="padding: 10px; text-align: center; border: 1px solid black">Сумма</td>
            </tr style="">
            ${cards.map((item) => {
            return `<tr style="">
                        <td style="padding: 10px; border: 1px solid grey">${item.name}</td>
                        <td style="padding: 10px; border: 1px solid grey">${item.count}</td>
                        <td style="padding: 10px; border: 1px solid grey">${item.price} руб.</td>
                    </tr>`
            })}
        </table>
            <div style="padding: 10px">
                <div>Всего количество: ${totalCount} шт.</div>
                <div>Всего сумма: ${totalPrice} руб.</div>
            </div>
        `   
    )

    const {register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        mode: 'onChange'
    })

    const valid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const emailValue = watch("email")

    const handleSendEmail = async () => {
        const templateId = 'template_5vbxbcc'; // Замените на ваш идентификатор шаблона
        const serviceId = 'service_cyc0tjd'; // Замените на ваш идентификатор сервиса

        const templateParams = {
            to_email: emailValue,
            my_html: getCartTemplate(cards, totalCount, totalPrice)
        };

        await emailjs.send(serviceId, templateId, templateParams, '46P-uyZXOGwPLne__') // Замените на ваш идентификатор пользователя
        .then(() => {
            alert('Готово!')
            setFormContent(0)
            reset()
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
                <form onSubmit={handleSubmit(handleSendEmail)} >
                    <label> Введите почту для отправки <br />
                        <input
                            placeholder='mail@mail.ru'
                            name='to_email'
                            {...register("email", {
                                required: 'Обязательное поле для заполнения',
                                pattern: {
                                    value: valid,
                                    message: 'Укажите корректный адрес почты'
                                }
                            })}
                        />
                            {errors.email && (
                                <div className='message-error empty'>{errors.email.message}</div>
                            )}
                        <button onClick={() => setFormContent(0)} type='button' className='basket-total-btn close'>
                            <span></span>
                            <span></span>
                        </button>
                    </label>
                    <div className="basket-total-btn">
                        <input type='submit'/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BasketTotal;