import { PATHS } from "../../../../router";
import PrimaryButton from "../../../ui/buttons/primaryButton";
import './product.scss'
import ProductCategory from "./productCategory";
import { Link } from 'react-router-dom';

const LinkMore = () =>{
    return(
        <Link to={PATHS.CATALOG}>
            <PrimaryButton>Подробнее</PrimaryButton>
        </Link>
    )
}

const Product = () => {
    return ( 
        <section className="product">
            <div className="container">
                <h2 className="product-title title">НОВЫЕ ТОВАРЫ</h2>
                <div className="product-top">
                    <img src="public/newback1.svg" alt="" />
                    <div className="product-top-description">
                        <h3 className="product-top-title title">РАЗЛИЧНЫЕ ВИДЫ КАЛЬМАРОВ</h3>
                        <LinkMore/>
                    </div>
                </div>
                <ProductCategory/>
                <div className="product-bottom row">
                    <div className="product-bottom-content">
                        <img src="public/newback2.svg" alt="" />
                        <div className="product-bottom-description">
                            <h3 className="product-bottom-title">КРЕВЕТКИ</h3>
                            <p className="product-bottom-price">ОТ 500 РУБ.</p>
                            <div className="product-bottom-button">
                                <LinkMore/>
                            </div>
                        </div>
                    </div>
                    <div className="product-bottom-content">
                        <img src="public/newback3.svg" alt="" />
                        <div className="product-bottom-description">
                            <h3 className="product-bottom-title">КРАБЫ</h3>
                            <p className="product-bottom-price">ОТ 350 РУБ.</p>
                            <div className="product-bottom-button">
                                <LinkMore/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Product;