import './card.scss'

const Card = (props) => {
    return ( 
        <article className="category-card">
            <img src={props.image} alt="card" />
            <div className="category-card-description">
                <div className="category-card-name">{props.name}</div>
                <div className="category-card-bottom row">
                    <div className="category-card-price">{props.price}</div>
                    <button className="category-card-button">ДОБАВИТЬ</button>
                </div>
            </div>
        </article>
     );
}
 
export default Card;