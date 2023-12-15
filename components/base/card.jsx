import './card.scss'

const Card = () => {
    return ( 
        <article className="category-card">
            <img src="/cart2.svg" alt="card" />
            <div className="category-card-description">
                <div className="category-card-name">Лодка Reef Тритон 420 НД</div>
                <div className="category-card-bottom row">
                    <div className="category-card-price">68 000 РУБ.</div>
                    <button className="category-card-button">ДОБАВИТЬ</button>
                </div>
            </div>
        </article>
     );
}
 
export default Card;