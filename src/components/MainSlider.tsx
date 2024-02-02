"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import MainSliderSingleSlide from "./SliderSingleSlide";
import MainSliderNavigation from "./SliderNavigation";

const MainSlider = ({ products }: { products: any }) => {
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
        {products.map((product: any) => (
          <SwiperSlide key={product._id}>
            <MainSliderSingleSlide product={product} />
          </SwiperSlide>
        ))}
        <MainSliderNavigation />
      </Swiper>
    </>
  );
};

export default MainSlider;
