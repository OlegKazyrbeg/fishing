import classes from './basket.module.scss'
import BasketContent from '../../components/pageBlocks/basket/basketContent'

const Basket = () => {
    return ( 
        <main className={classes.basket}>
            <BasketContent/>
        </main>
     );
}
 
export default Basket;