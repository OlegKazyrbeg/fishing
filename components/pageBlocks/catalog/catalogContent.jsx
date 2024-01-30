import './catalogContent.scss'
import { setCategoryId } from '../../../redux/slices/filterSlice';
import CatalogButtons from "./catalogButtons/catalogButtons";
import Card from '../../base/card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const CatalogContent = () => {
    const dispath = useDispatch()
    const categoryId = useSelector(state => state.filter.categoryId)
    const [ItemCategory, setItemCategory] = useState([]);

    const onClickCategory = (id) =>{
        dispath(setCategoryId(id))
    }

    useEffect(() => {
        const category = categoryId > 0 ? `type=${categoryId}` : ''

        axios.get(`http://localhost:3001/itemCategory?${category}`)
          .then(res => {
            setItemCategory(res.data)
          })
      }, [categoryId]);


    return ( 
        <section className="catalog">
            <div className="container">
                <CatalogButtons value={categoryId} onClickCategory={onClickCategory}/>
                <div className="catalog-content row">
                    {ItemCategory.map((obj) =>(
                        <Card key={obj.id} {...obj}
                        />
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default CatalogContent;