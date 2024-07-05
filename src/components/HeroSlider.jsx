import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderImage } from "../data/localData";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function HeroSlider() {
  return (
    <Swiper
      className="max-w-[1430px]"
      loop={true}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay]}
    >
      <div className="absolute z-[100000] top-0 bg-white/30 w-full h-[553px]"></div>
      <div className="max-w-[1417px] relative">
        {sliderImage.map((item) => (
          <SwiperSlide>
            <img
              className="w-[1416px] h-[553px] object-cover"
              key={item.id}
              src={item.image}
              alt="/"
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}

export default HeroSlider;
