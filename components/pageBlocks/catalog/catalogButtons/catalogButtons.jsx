import './catalogButtons.scss'
import { useState } from 'react';

const CatalogButtons = () => {
    const [activeBtn, setActiveBtn] = useState(0)

    const categories = ['все', 'рыбка', 'крабики', 'трусики чембера']

    return ( 
        <div className="catalog-buttons">
            <ul className="catalog-buttons-list row">
                {categories.map((value, i) =>(
                    <li
                        key={i}
                        onClick={() => setActiveBtn(i)}
                        className="catalog-buttons-item"><button className={activeBtn === i ? 'active' : ''}>{value}</button>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default CatalogButtons;