import Card from "../../../base/card";
import { useState, useEffect } from "react";
import axios from 'axios'

const ProductCategory = () => {
    const [toggleState, setToggleState] = useState(0)

    const categories = ['рыба', 'кальмары', 'крабы']

    const toggleTab = (index) =>{
        setToggleState(index)
    }

    const [ItemCategoryFish, setItemCategoryFish] = useState([]);
    const [ItemCategoryCalmar, setItemCategoryCalmar] = useState([]);
    const [ItemCategoryCrab, setItemCategoryCrab] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/itemCategory', {
            params: {
                type: 3
            }
        })
          .then(response => setItemCategoryCrab(response.data))
          .catch(error => console.log(error));
      }, []);

      useEffect(() => {
        axios.get('http://localhost:3001/itemCategory', {
            params: {
                type: 2
            }
        })
          .then(response => setItemCategoryCalmar(response.data))
          .catch(error => console.log(error));
      }, []);

      useEffect(() => {
        axios.get('http://localhost:3001/itemCategory', {
            params: {
                type: 1
            }
        })
          .then(response => setItemCategoryFish(response.data))
          .catch(error => console.log(error));
      }, []);

    return ( 
        <div className="product-category">
            <div className="product-category-tabs row">
                {categories.map((value, i) =>(
                    <button 
                        key={i}
                        onClick={() => toggleTab(i)} 
                        className={toggleState === i ? "product-category-tabs-button active" : "product-category-tabs-button"}>{value}
                    </button>
                ))}
            </div>
            <div className="product-category-content">
                <div onClick={() => toggleTab(0)} 
                     className={toggleState === 0 ? "product-category-tab row active" : "product-category-tab row" }>
                            {ItemCategoryFish.map(item => {
                                return (
                                    <Card
                                        key={item.id}
                                        image={item.image}
                                        name={item.name}
                                        price={item.price}/>                                  
                                )
                            })}
                </div>
                <div onClick={() => toggleTab(1)} 
                     className={toggleState === 1 ? "product-category-tab row active" : "product-category-tab row" }>
                            {ItemCategoryCalmar.map(item => {
                                return (
                                    <Card
                                        key={item.id}
                                        image={item.image}
                                        name={item.name}
                                        price={item.price}/>                                  
                                )
                            })}
                </div>
                <div onClick={() => toggleTab(2)} 
                     className={toggleState === 2 ? "product-category-tab row active" : "product-category-tab row" }>
                            {ItemCategoryCrab.map(item => {
                                return (
                                    <Card
                                        key={item.id}
                                        image={item.image}
                                        name={item.name}
                                        price={item.price}/>                                  
                                )
                            })}
                </div>
            </div>
        </div>
     );
}
 
export default ProductCategory;