import Image from "next/image";

import { Heart, ShoppingCartIcon } from "lucide-react";

const SwiperSingleSlide = () => {
  return (
    <div className="relative">
      <Image
        width={1000}
        height={100}
        src={"/r6bg.jpg"}
        alt="bg"
        className="rounded-xl shadow-xl"
      />
      <div className="flex items-center gap-3 absolute top-4 right-4">
        <ShoppingCartIcon
          size={24}
          strokeWidth={1.1}
          className="cursor-pointer text-green-500"
        />
        <Heart
          size={24}
          strokeWidth={1.1}
          className="cursor-pointer text-red-500 mt-1"
        />
      </div>
    </div>
  );
};

export default SwiperSingleSlide;
