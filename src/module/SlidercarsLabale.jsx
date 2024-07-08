import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "../assets/cars/1.webp";
import image2 from "../assets/cars/2.webp";
import image3 from "../assets/cars/3.webp";
import image4 from "../assets/cars/4.webp";
import image5 from "../assets/cars/5.webp";
import image6 from "../assets/cars/6.webp";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className="mt-[4rem] max-w-[1000px] mx-auto flex mb-[3rem] p-4">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
          865: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 6,
          },
          1700: {
            slidesPerView: 7,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={image3} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={image4} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
