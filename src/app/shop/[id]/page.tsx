import Image from "next/image";
import React from "react";

import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SingleComment from "@/components/SingleComment";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SingleGamePage = () => {
  return (
    <div className="relative">
      <Image
        src={"/r6bg.jpg"}
        alt="r6"
        width={2000}
        height={1000}
        className="fixed inset-0 -z-[2000] opacity-10 rounded-xl"
      />
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <Image
          src={"/r6prev.jpg"}
          alt="r6"
          width={300}
          height={100}
          className="rounded-xl shadow-2xl shadow-primary/30"
        />
        <div className="self-start p-5 flex flex-col gap-5 mt-10">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-primary">
              Rainbow Six Siege
            </h2>
            <div className="flex items-center gap-1">
              <Star
                fill="yellow"
                strokeWidth={1.2}
                size={19}
                className="text-yellow-400"
              />
              <Star
                fill="yellow"
                strokeWidth={1.2}
                size={19}
                className="text-yellow-400"
              />
              <Star
                fill="yellow"
                strokeWidth={1.2}
                size={19}
                className="text-yellow-400"
              />
              <Star
                fill="yellow"
                strokeWidth={1.2}
                size={19}
                className="text-yellow-400"
              />
              <Star strokeWidth={1.2} size={19} className="text-yellow-400" />
            </div>
          </div>
          <span className="font-semibold rounded-xl border border-secondary-foreground self-start px-2 py-1 text-sm">
            Action
          </span>
          <p className="text-sm text-muted-foreground leading-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            eveniet nesciunt, reprehenderit cumque atque earum eligendi dolores
            reiciendis hic recusandae? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Porro eveniet nesciunt, reprehenderit cumque atque
            earum eligendi dolores reiciendis hic recusandae?
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-green-500">$14</span>
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
      <Heart
        fill="red"
        className="absolute top-5 right-16 text-red-500 cursor-pointer"
      />
      <div className="mt-10 p-2 flex flex-col gap-4">
        <h2 className="font-bold text-xl">Comments</h2>
        <div className="flex flex-col-reverse sm:flex-row gap-10 p-2">
          <div className="sm:w-1/2 flex flex-col gap-4">
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
          </div>
          <div className="sm:w-1/2 flex flex-col gap-4 bg-secondary p-5 rounded-xl h-fit sm:sticky top-20">
            <h2 className="text-xl font-bold">Add Your Own Comment</h2>
            <Input placeholder="Name" className="border-primary" />
            <Input placeholder="Email" className="border-primary" />
            <Textarea
              placeholder="Your Comment"
              rows={7}
              className="border-primary"
            />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGamePage;
