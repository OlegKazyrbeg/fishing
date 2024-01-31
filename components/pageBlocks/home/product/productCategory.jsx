import Card from "../../../base/card";
import ProductBtn from "./productBtn";

import { setCategoryId } from "../../../../redux/slices/filterSlice";
import { fetchItems } from "../../../../redux/slices/getSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const ProductCategory =  () => {
    const dispath = useDispatch() 
    const categoryId = useSelector(state => state.filter.categoryId)
    const items = useSelector(state => state.getCard.items)

    const onClickCategory = (id) =>{
        dispath(setCategoryId(id))
    }

    const getCard = async () =>{
        const category = categoryId == 0 ? `type=1` : categoryId == 1 ? `type=3` : `type=2`

        dispath(fetchItems({category}))

    }

    useEffect(() => {
        getCard()
      }, [categoryId]);

    return ( 
        <div className="product-category">
            <ProductBtn value={categoryId} onClickButtons={onClickCategory}/>
            <div className="product-category-content">
                <div className="product-category-tab row">
                    {items.map(item => <Card key={item.id} {...item} />)}
                </div>
            </div>
        </div>
     );
}
 
export default ProductCategory;