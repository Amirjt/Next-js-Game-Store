"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import MainSliderSingleSlide from "./SliderSingleSlide";
import MainSliderNavigation from "./SliderNavigation";

const MainSlider = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        grabCursor
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        className="mySwiper relative rounded-xl shadow-2xl shadow-primary/40"
      >
        <SwiperSlide>
          <MainSliderSingleSlide />
        </SwiperSlide>
        <SwiperSlide>
          <MainSliderSingleSlide />
        </SwiperSlide>
        <SwiperSlide>
          <MainSliderSingleSlide />
        </SwiperSlide>
        <MainSliderNavigation />
      </Swiper>
    </>
  );
};

export default MainSlider;
