import 'swiper/css';
import 'swiper/css/navigation';
import './popular.scss'
import SwiperPopular from './swiperPopular';


const Popular = () => {

    return ( 
        <section className="popular">
            <div className="container">
                <h2 className="popular-title title">ПОПУЛЯРНОЕ</h2>
                <div className="popular-slider">
                    <SwiperPopular/>
                </div>
            </div>
        </section>
     );
}
 
export default Popular;