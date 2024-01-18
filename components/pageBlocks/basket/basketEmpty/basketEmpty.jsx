import { Link } from "react-router-dom";
import { PATHS } from "../../../../router";
import './basketEmpty.scss'
import PrimaryButton from "../../../ui/buttons/primaryButton";

const BasketEmpty = () => {
    return ( 
        <section className="basket-empty row">
            <div className="container">
                <h2 className="basket-empty-title">Корзина пуста</h2>
                <Link className="basket-empty-button" to={PATHS.CATALOG}>
                    <PrimaryButton>В каталог</PrimaryButton>
                </Link>
            </div>
        </section>
     );
}
 
export default BasketEmpty;