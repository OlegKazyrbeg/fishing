import Card from "../../../base/card";
import axios from 'axios'
import ProductBtn from "./productBtn";
import { setCategoryId } from "../../../../redux/slices/filterSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";

const ProductCategory = () => {
    const dispath = useDispatch() 
    const categoryId = useSelector(state => state.filter.categoryId)
    const [ItemCategory, setItemCategory] = useState([]);

    const onClickCategory = (id) =>{
        dispath(setCategoryId(id))
    }

    useEffect(() => {
        const category = categoryId == 0 ? `type=1` : categoryId == 1 ? `type=3` : `type=2`

        axios.get(`http://localhost:3001/itemCategory?${category}`)
          .then(res => {
            setItemCategory(res.data)
          })
      }, [categoryId]);

    return ( 
        <div className="product-category">
            <ProductBtn value={categoryId} onClickButtons={onClickCategory}/>
            <div className="product-category-content">
                <div className="product-category-tab row">
                    {ItemCategory.map(item => <Card key={item.id} {...item} />)}
                </div>
            </div>
        </div>
     );
}
 
export default ProductCategory;