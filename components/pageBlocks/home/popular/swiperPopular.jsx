import { Navigation, A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../../../base/card';
import axios from 'axios'
import React, { useState, useEffect } from 'react';

const SwiperPopular = () => {

    const [SliderItem, setSliderItem] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/sliderItemPopular')
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
        {SliderItem.map(item => {
            return (
                <SwiperSlide key={item.id}>
                    <Card
                        image={item.image}
                        name={item.name}
                        price={item.price}/>
                </SwiperSlide>
            )
        })}
    </Swiper>
     );
}
 
export default SwiperPopular;