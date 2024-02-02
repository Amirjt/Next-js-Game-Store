import Image from "next/image";
import React from "react";

const SingleComment = ({ comment }: { comment: any }) => {
  return (
    <div className="p-3 rounded-xl border border-secondary-foreground flex flex-col gap-2 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Image src={"/noavatar.png"} width={30} height={30} alt="avatar" />
        <span className="text-primary font-bold">{comment.user}</span>
      </div>
      <p className="mt-2 text-sm ">{comment.text}</p>
      <span className="self-end text-muted-foreground text-xs">
        {comment.createdAt.slice(0, 10)}
      </span>
    </div>
  );
};

export default SingleComment;
