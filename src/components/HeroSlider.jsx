import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderImage } from "../data/localData";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SearchBar from "./SearchBar";

function HeroSlider() {
  return (
    <div className="relative">
      <div className="absolute top-[6rem] z-50 xl:right-[15rem] lg:right-[11rem] md:right-[3rem] sm:right-[14rem] right-[2.5rem]">
        {/* <SearchBar /> */}
      </div>
      <Swiper
        className="max-w-[1430px] shadow-2xl rounded-lg"
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
      >
        <div className="absolute z-[100000] top-0 bg-white/30 w-full h-[553px]"></div>
        <div className="max-w-[1417px] relative">
          {sliderImage.map((item) => (
            <SwiperSlide>
              <img
                className="w-[1416px] h-[553px] object-cover rounded-b-2xl"
                key={item.id}
                src={item.image}
                alt="/"
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
