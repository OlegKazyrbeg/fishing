import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ReviewSlider = () => {
    return ( 
        <Swiper
            modules={[Navigation, A11y, Autoplay]}
            loop={true}
            speed={1500}
            autoplay={{
                delay: 6500,
            }}
            slidesPerView={1}
            navigation
      > 
            <SwiperSlide>
                <article className="review-card row">
                    <ul className='row'>
                        <li><img src="/star.svg" alt="" /></li>
                        <li><img src="/star.svg" alt="" /></li>
                        <li><img src="/star.svg" alt="" /></li>
                        <li><img src="/star.svg" alt="" /></li>
                        <li><img src="/star.svg" alt="" /></li>
                    </ul>
                    <p className="review-card-text">Ваш магазин - мой постоянный партнер на рыбалке. Крючки, поводки, снасти - все, что нужно для успешной ловли, всегда есть в наличии. И всегда радует качество товаров и профессиональный подход к клиентам. Рекомендую!</p>
                </article>
            </SwiperSlide>
            <SwiperSlide>
                <article className="review-card row">
                    <ul className='row'>
                        <li><img src="/star.svg" alt="" /></li>
                        <li><img src="/star.svg" alt="" /></li>
                        <li><img src="/star.svg" alt="" /></li>
                        <li><img src="/star.svg" alt="" /></li>
                        <li><img src="/star.svg" alt="" /></li>
                    </ul>
                    <p className="review-card-text">Ваш магазин - мой постоянный партнер на рыбалке. Крючки, поводки, снасти - все, что нужно для успешной ловли, всегда есть в наличии. И всегда радует качество товаров и профессиональный подход к клиентам. Рекомендую!</p>
                </article>
            </SwiperSlide>
        </Swiper>
     );
}
 
export default ReviewSlider;