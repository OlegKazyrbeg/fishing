import './catalogButtons.scss'

const CatalogButtons = ({value, onClickCategory}) => {
    const categories = ['все', 'рыбка', 'крабики', 'трусики чембера']

    return ( 
        <div className="catalog-buttons">
            <ul className="catalog-buttons-list row">
                {categories.map((categoryName, i) =>(
                    <li
                        key={i}
                        onClick={() => onClickCategory(i)}
                        className="catalog-buttons-item"><button className={value === i ? 'active' : ''}>{categoryName}</button>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default CatalogButtons;