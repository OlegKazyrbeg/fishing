import './catalogContent.scss'
import { setCategoryId } from '../../../redux/slices/filterSlice';
import CatalogButtons from "./catalogButtons/catalogButtons";
import Card from '../../base/card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const CatalogContent = () => {
    const dispath = useDispatch()
    const categoryId = useSelector(state => state.filter.categoryId)
    
    const onClickCategory = (id) =>{
        dispath(setCategoryId(id))
    }
    const [ItemCategory, setItemCategory] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/itemCategory?${categoryId > 0 ? `type=${categoryId}` : ''}`)
          .then(response => setItemCategory(response.data))
          .catch(error => console.log(error));
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