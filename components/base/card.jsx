import './card.scss'

const Card = () => {
    return ( 
        <article className="category-card">
            <img src="/public/cart1.webp" alt="card" />
            <div className="category-card-description">
                <div className="category-card-name">Барабуля черноморская</div>
                <div className="category-card-bottom row">
                    <div className="category-card-price">260 руб.</div>
                    <button className="category-card-button">ДОБАВИТЬ</button>
                </div>
            </div>
        </article>
     );
}
 
export default Card;