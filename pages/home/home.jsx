import Hero from "../../components/pageBlocks/home/hero/hero";
import More from "../../components/pageBlocks/home/more/more";
import Product from "../../components/pageBlocks/home/product/product";
import Popular from "../../components/pageBlocks/home/popular/popular"
import Review from "../../components/pageBlocks/home/review/review";
import './home.scss'

const Home = () => {
    return ( 
        <main className="home">
            <Hero/>
            <More/>
            <Product/>
            <Popular/>
            <Review/>
        </main>
     );
}
    
export default Home;