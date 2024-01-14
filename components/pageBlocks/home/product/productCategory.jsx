import Card from "../../../base/card";
import { useState, useEffect } from "react";
import axios from 'axios'
import ProductBtn from "./productBtn";

const ProductCategory = () => {
    const [ItemCategory, setItemCategory] = useState([]);
    const [categoryId, setCategoryId] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:3001/itemCategory?${
            categoryId == 0 ? `type=1` :
            categoryId == 1 ? `type=3` :
            `type=2`
        }`,{
        })
          .then(response => setItemCategory(response.data))
          .catch(error => console.log(error));
      }, [categoryId]);

    return ( 
        <div className="product-category">
            <ProductBtn value={categoryId} onClickButtons={(i)=> setCategoryId(i)}/>
            <div className="product-category-content">
                <div className="product-category-tab row">
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
        </div>
     );
}
 
export default ProductCategory;