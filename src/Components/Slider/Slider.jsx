import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// images

import r1 from '../Assets/r1.png'
import r2 from '../Assets/r2.png'
import r3 from '../Assets/r3.png'

import "./Slider.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

<section></section>

export default function slider() {
  return (
    <>
    <section className="slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={r1} alt="" />
            <span>Aliva Priva Jardin</span>
            <span>47,043</span>
            <span>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={r2} alt="" />
            <span>Aliva Priva Jardin</span>
            <br />
            <span>47,043</span>
            <br />
            <span>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={r3} alt="" />
            <span>Aliva Priva Jardin</span>
            <br />
            <span>47,043</span>
            <br />
            <span>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</span>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div>
            <img src="" alt="" />
            <span>Aliva Priva Jardin</span>
            <span>47,043</span>
            <span>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</span>
          </div>
        </SwiperSlide>
      </Swiper>
      </section>
    </>
  );
}
