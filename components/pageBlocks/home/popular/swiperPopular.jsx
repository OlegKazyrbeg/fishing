import { Navigation, A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../../../base/card';

const SwiperPopular = () => {
    return ( 
        <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={10}
        speed={500}
        slidesPerView={2}
        autoplay
        navigation
        breakpoints={{
            789: {
                slidesPerView: 3,
                spaceBetween: 45,
              },
        }}
      >
        <SwiperSlide>
            <Card/>
        </SwiperSlide>
        <SwiperSlide>
            <Card/>
        </SwiperSlide>
        <SwiperSlide>
            <Card/>
        </SwiperSlide>
        <SwiperSlide>
            <Card/>
        </SwiperSlide>
        <SwiperSlide>
            <Card/>
        </SwiperSlide>
        <SwiperSlide>
            <Card/>
        </SwiperSlide>
    </Swiper>
     );
}
 
export default SwiperPopular;