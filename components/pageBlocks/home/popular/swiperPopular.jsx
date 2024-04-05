import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../../../base/card/card';
import axios from 'axios'
import { useState, useEffect } from 'react';

const SwiperPopular = () => {
    const [sliderItem, setSliderItem] = useState([]);

    useEffect(() => {
        axios.get('https://appetitfish.netlify.app/api/items?pre_category=popular')
          .then(response => setSliderItem(response.data))
          .catch(error => console.log(error));
      }, []);

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
        {sliderItem.map(item => 
            <SwiperSlide key={item.id}>
                <Card {...item}/>
            </SwiperSlide>)}
    </Swiper>
     );
}
 
export default SwiperPopular;