import Image from "next/image";
import React from "react";

const SingleComment = () => {
  return (
    <div className="p-3 rounded-xl border border-secondary-foreground flex flex-col gap-2 backdrop-blur-sm">
      <div className="flex items-center gap-2" >
        <Image src={"/noavatar.png"} width={30} height={30} alt="avatar" />
        <span className="text-primary font-bold" >Amir jtt</span>
      </div>
      <p className="mt-2 text-sm " >That Was so good thank you !</p>
      <span className="self-end text-muted-foreground text-xs" >2023.12.12</span>
    </div>
  );
};

export default SingleComment;
