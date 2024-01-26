"use client";

import { useSwiper } from "swiper/react";

import { ArrowLeft, ArrowRight } from "lucide-react";

const SliderNavigation = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-between gap-3 items-center z-50 absolute top-4 left-4">
      <ArrowLeft
        size={28}
        onClick={() => swiper.slidePrev()}
        className="cursor-pointer bg-primary hover:bg-rose-400 duration-200 rounded-full p-1 text-white"
      />
      <ArrowRight
        size={28}
        onClick={() => swiper.slideNext()}
        className="cursor-pointer bg-primary hover:bg-rose-400 duration-200 rounded-full p-1 text-white"
      />
    </div>
  );
};

export default SliderNavigation;
