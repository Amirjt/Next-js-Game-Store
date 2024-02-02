"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

import SliderSingleSlide from "./SliderSingleSlide";
import SliderNavigation from "./SliderNavigation";

const LatestProductsSlider = ({ products }: { products: any }) => {
  return (
    <div className="bg-secondary p-3 rounded-xl border border-border shadow-2xl shadow-primary/15">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        slidesPerView={1}
        navigation={true}
        grabCursor
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper relative"
      >
        {products.map((product: any) => (
          <SwiperSlide key={product._id}>
            <SliderSingleSlide product={product} />
          </SwiperSlide>
        ))}
        <SliderNavigation />
      </Swiper>
    </div>
  );
};

export default LatestProductsSlider;
