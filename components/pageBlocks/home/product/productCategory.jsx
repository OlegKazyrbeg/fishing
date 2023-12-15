import Card from "../../../base/card";
import { useState } from "react";

const ProductCategory = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) =>{
        setToggleState(index)
    }

    return ( 
        <div className="product-category">
            <div className="product-category-tabs row">
                <button 
                    onClick={() => toggleTab(1)} 
                    className={toggleState === 1 ? "product-category-tabs-button active" : "product-category-tabs-button"}>УДОЧКИ</button>
                <button 
                    onClick={() => toggleTab(2)} 
                    className={toggleState === 2 ? "product-category-tabs-button active" : "product-category-tabs-button"}>КАТУШКИ</button>
                <button 
                    onClick={() => toggleTab(3)} 
                    className={toggleState === 3 ? "product-category-tabs-button active" : "product-category-tabs-button"}>ЛОДКИ</button>
            </div>
            <div className="product-category-content">
                <div onClick={() => toggleTab(1)} 
                     className={toggleState === 1 ? "product-category-tab row active" : "product-category-tab row" }>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                </div>
                <div onClick={() => toggleTab(1)} 
                     className={toggleState === 2 ? "product-category-tab row active" : "product-category-tab row" }>
                    <Card/>
                    <Card/>
                </div>
                <div onClick={() => toggleTab(1)} 
                     className={toggleState === 3 ? "product-category-tab row active" : "product-category-tab row" }>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
     );
}
 
export default ProductCategory;