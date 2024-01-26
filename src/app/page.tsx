import Featured from "@/components/Featured";
import SwiperSlider from "@/components/SwiperSlider";

import MotionProvider from "@/providers/MotionProvider";

const HomePage = () => {
  return (
    <MotionProvider>
      <div className="flex flex-col gap-8 sm:gap-16">
        <div className="flex items-center sm:justify-center gap-4">
          <div className="hidden sm:block sm:w-3/12">
            <Featured />
          </div>
          <div className="sm:w-8/12 w-full">
            <SwiperSlider />
          </div>
        </div>
        <div className="p-2" >
          <h2 className="z-[999] font-bold text-xl sm:text-2xl relative after:w-1/2 after:h-2 after:absolute after:left-0 after:top-1/3 after:bg-gradient-to-r after:opacity-20 after:from-primary after:to-transparent after:-z-50" >Latest <span className="text-primary" >Games</span> !</h2>
        </div>
      </div>
    </MotionProvider>
  );
};

export default HomePage;
