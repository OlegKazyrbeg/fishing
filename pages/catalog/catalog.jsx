import classes from '../../pages/catalog/catalog.module.scss'
import CatalogContent from '../../components/pageBlocks/catalog/catalogContent';

const Catalog = () => {
    return ( 
        <main className={classes.catalog}>
            <CatalogContent/>
        </main>
     );
}
 
export default Catalog;