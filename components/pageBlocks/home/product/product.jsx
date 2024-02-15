import { PATHS } from "../../../../router";
import PrimaryButton from "../../../ui/buttons/primaryButton";
import './product.scss'
import ProductCategory from "./productCategory";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const LinkMore = () =>{
    return(
        <Link to={PATHS.CATALOG}>
            <PrimaryButton>Подробнее</PrimaryButton>
        </Link>
    )
}

const animation = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1},
}

const Product = () => {
    return ( 
        <section className="product">
            <div className="container">
                <motion.h2 className="product-title title"
                    variants={animation}
                    initial='initial'
                    whileInView='whileInView'
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}>   
                    НОВЫЕ ТОВАРЫ
                </motion.h2>

                <motion.div className="product-top"
                    variants={animation}
                    initial='initial'
                    whileInView='whileInView'
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .3 }}>

                    <img src="public/newback1.svg" alt="" />
                    <div className="product-top-description">
                        <h3 className="product-top-title title">РАЗЛИЧНЫЕ ВИДЫ КАЛЬМАРОВ</h3>
                        <LinkMore/>
                    </div>
                </motion.div>
                
                <ProductCategory/>
                <div className="product-bottom row">
                    <motion.div className="product-bottom-content"
                        variants={animation}
                        initial='initial'
                        whileInView='whileInView'
                        viewport={{ once: true }}
                        transition={{ duration: .8}}>
                            
                        <img src="public/newback2.svg" alt="" />
                        <div className="product-bottom-description">
                            <h3 className="product-bottom-title">КРЕВЕТКИ</h3>
                            <p className="product-bottom-price">ОТ 500 РУБ.</p>
                            <div className="product-bottom-button">
                                <LinkMore/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="product-bottom-content"
                        variants={animation}
                        initial='initial'
                        whileInView='whileInView'
                        viewport={{ once: true }}
                        transition={{ duration: .8, delay: .15}}>

                        <img src="public/newback3.svg" alt="" />
                        <div className="product-bottom-description">
                            <h3 className="product-bottom-title">КРАБЫ</h3>
                            <p className="product-bottom-price">ОТ 350 РУБ.</p>
                            <div className="product-bottom-button">
                                <LinkMore/>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
     );
}
 
export default Product;