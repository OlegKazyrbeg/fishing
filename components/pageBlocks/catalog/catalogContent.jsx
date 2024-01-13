import CatalogButtons from "./catalogButtons/catalogButtons";
import Card from '../../base/card';
import './catalogContent.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';


const CatalogContent = () => {
    const [ItemCategory, setItemCategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/itemCategory')
          .then(response => setItemCategory(response.data))
          .catch(error => console.log(error));
      }, []);

    return ( 
        <section className="catalog">
            <div className="container">
                <CatalogButtons  />
                <div className="catalog-content row">
                    {ItemCategory.map(item =>(
                        <Card
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