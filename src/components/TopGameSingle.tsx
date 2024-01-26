import { Heart, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";

const TopGameSingle = () => {
  return (
    <div className="cursor-pointer relative">
      <Image
        src={"/r6prev.jpg"}
        alt="prev"
        height={100}
        width={200}
        className="rounded-xl"
      />
      <div className="flex items-center gap-2 absolute top-2 right-2">
        <ShoppingCartIcon
          size={26}
          strokeWidth={1.1}
          className="cursor-pointer bg-green-800 p-1 rounded-full text-white"
        />
        <Heart
          size={26}
          strokeWidth={1.1}
          className="cursor-pointer bg-red-800 p-1 rounded-full text-white"
        />
      </div>
      <div className="absolute bottom-2 left-2" >
        <span className="text-sm font-bold text-white" >Rainbow Six Siege</span>
      </div>
      <div className="absolute left-2 top-2" >
        <span className="text-base font-bold text-green-500" >$ 144</span>
      </div>
    </div>
  );
};

export default TopGameSingle;
