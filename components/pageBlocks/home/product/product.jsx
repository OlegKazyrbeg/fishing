import PrimaryButton from "../../../../ui/buttons/primaryButton";
import './product.scss'
import ProductCategory from "./productCategory";

const Product = () => {
    return ( 
        <section className="product">
            <div className="container">
                <h2 className="product-title title">НОВЫЕ ТОВАРЫ</h2>
                <div className="product-top">
                    <img src="/newback1.svg" alt="" />
                    <div className="product-top-description">
                        <h3 className="product-top-title title">РАЗЛИЧНЫЕ ВИДЫ УДОЧЕК</h3>
                        <PrimaryButton/>
                    </div>
                </div>
                <ProductCategory/>
                <div className="product-bottom row">
                    <div className="product-bottom-content">
                        <img src="/newback2.svg" alt="" />
                        <div className="product-bottom-description">
                            <h3 className="product-bottom-title">БРЕНДОВЫЕ УДОЧКИ</h3>
                            <p className="product-bottom-price">ОТ 10 000 РУБ.</p>
                            <div className="product-bottom-button">
                                <PrimaryButton/>
                            </div>
                        </div>
                    </div>
                    <div className="product-bottom-content">
                        <img src="/newback3.svg" alt="" />
                        <div className="product-bottom-description">
                            <h3 className="product-bottom-title">Лови больше рыбы на качественной лодке</h3>
                            <p className="product-bottom-price">ОТ ОТ 50 000 РУБ.</p>
                            <div className="product-bottom-button">
                                <PrimaryButton/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Product;