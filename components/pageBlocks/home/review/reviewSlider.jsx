import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ReviewSlider = () => {
    return ( 
        <Swiper
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={45}
            loop={true}
            speed={1500}
            autoplay={{
                delay: 6500,
            }}
            slidesPerView={1}
            navigation
      > 
        {
            new Array(2).fill(0).map(() =>
                <SwiperSlide>
                         <article className="review-card row">
                             <ul className='row'>
                                 {new Array(5).fill(0).map(() =>
                                    <li><img src="/star.svg" alt="" /></li>
                                    )}
                            </ul>
                            <p className="review-card-text">"Отличное качество морепродуктов! Заказывал у них креветки и осьминоги - всё было свежим и вкусным. Доставка была быстрой, упаковка надежная. Рекомендую этот сайт всем любителям морепродуктов!"</p>
                        </article>
                </SwiperSlide>
                )
        }
        </Swiper>
     );
}
 
export default ReviewSlider;