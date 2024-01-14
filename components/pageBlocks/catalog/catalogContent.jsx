import CatalogButtons from "./catalogButtons/catalogButtons";
import Card from '../../base/card';
import './catalogContent.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';


const CatalogContent = () => {
    const [categoryId, setCategoryId] = useState(0)
    const [ItemCategory, setItemCategory] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/itemCategory?${categoryId > 0 ? `type=${categoryId}` : ''}`)
          .then(response => setItemCategory(response.data))
          .catch(error => console.log(error));
      }, [categoryId]);

    return ( 
        <section className="catalog">
            <div className="container">
                <CatalogButtons value={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
                <div className="catalog-content row">
                    {ItemCategory.map((item, i) =>(
                        <Card
                            key={i}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default CatalogContent;