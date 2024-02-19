import './catalogContent.scss'

import CatalogButtons from "./catalogButtons/catalogButtons";
import Card from '../../base/card';

import { setCategoryId } from '../../../redux/slices/filterSlice';
import { useEffect } from 'react';
import { fetchItems } from "../../../redux/slices/getSlice";
import { useDispatch, useSelector } from 'react-redux';


const CatalogContent = () => {
    const dispath = useDispatch()
    const categoryId = useSelector(state => state.filter.categoryId)
    const items = useSelector(state => state.getCard.items)

    const onClickCategory = (id) =>{
        dispath(setCategoryId(id))
    }

    const getCard = async () =>{
        const category = categoryId > 0 ? `type=${categoryId}` : ''

        dispath(fetchItems({category}))

    }

    useEffect(() => {
        getCard()
      }, [categoryId]);


    return ( 
        <section className="catalog">
            <div className="container">
                <CatalogButtons value={categoryId} onClickCategory={onClickCategory}/>
                <div className="catalog-content row">
                    {items.map((obj) =>(<Card key={obj.id} {...obj}/>))}
                </div>
            </div>
        </section>
     );
}
 
export default CatalogContent;