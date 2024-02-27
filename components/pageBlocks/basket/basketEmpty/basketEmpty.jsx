import { Link } from "react-router-dom";
import { PATHS } from "../../../../router";
import './basketEmpty.scss'
import PrimaryButton from "../../../ui/buttons/primaryButton";
import { motion } from "framer-motion";

const Sucsessfull = () => (
    <motion.div
        initial={{x: '-200%'}}
        animate={{x: '0%'}}
        transition={{duration: 0.75}}>
        <div className="sucsess-content">
            <p>Ваша заявка отправлена!</p>
        </div>
    </motion.div>
)

const BasketEmpty = ({sucsess}) => {
    return ( 
        <section className="basket-empty row">
            <div className="container">
                <h2 className="basket-empty-title">Корзина пуста</h2>
                <Link className="basket-empty-button" to={PATHS.CATALOG}>
                    <PrimaryButton>В каталог</PrimaryButton>
                </Link>
            </div>
            <div className={sucsess ? 'sucsess-wrapper active' : 'sucsess-wrapper'}>
                <Sucsessfull/>
            </div>
        </section>
     );
}
 
export default BasketEmpty;