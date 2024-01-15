import './basketCard.scss'

const BasketCard = () => {
    return ( 
        <article className="basket-card row">
            <div className="basket-card-description row">
                <img src="/public/card-image1.webp" alt="" width={240}/>
                <h1 className="basket-card-title">Барабуля черноморская</h1>
            </div>
            <div className="basket-card-count row">
                <button className="card-count-button count-delete">убавить</button>
                <div className="card-count">1</div>
                <button className="card-count-button count-add">добавить</button>
            </div>
            <div className="basket-card-price">260 руб.</div>
            <button className="basket-card-delete">delete</button>
        </article>
     );
}
 
export default BasketCard;