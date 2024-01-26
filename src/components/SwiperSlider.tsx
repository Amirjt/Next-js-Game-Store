"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import SwiperNavigation from "./SwiperNavigation";
import SwiperSingleSlide from "./SwiperSingleSlide";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        className="mySwiper relative rounded-xl shadow-2xl shadow-primary/40"
      >
        <SwiperSlide>
            <SwiperSingleSlide/>
        </SwiperSlide>
        <SwiperSlide>
            <SwiperSingleSlide/>
        </SwiperSlide>
        <SwiperSlide>
            <SwiperSingleSlide/>
        </SwiperSlide>
        <SwiperNavigation />
      </Swiper>
    </>
  );
};

export default SwiperSlider;
