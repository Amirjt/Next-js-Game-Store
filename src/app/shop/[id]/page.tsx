"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SingleComment from "@/components/SingleComment";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Context } from "@/context/MainContext";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleGamePage = ({ params }: { params: any }) => {
  const { products, favorites, setFavorites, cart, setCart } =
    useContext(Context);

  const [user, setUser] = useState("");
  const [text, setText] = useState("");

  const [comments, setComments] = useState([]);

  const commentGetter = () => {
    fetch("http://localhost:3000/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  };

  useEffect(() => {
    commentGetter();
  }, []);

  const singleProduct = products.find((p: any) => p._id === params.id);

  const sigleProductComments = comments?.filter(
    (comment) => comment?.product?._id === singleProduct?._id
  );

  const rating = Number(singleProduct?.rating);

  const existing = favorites?.some((p: any) => p._id === singleProduct?._id);

  const addFavoriteHandler = () => {
    if (!existing) {
      setFavorites((prev: any) => [...prev, singleProduct]);
    } else if (existing) {
      setFavorites((prev: any) =>
        prev.filter((p: any) => p._id !== singleProduct?._id)
      );
    }
  };

  const existingProduct = cart?.some((p: any) => p._id === singleProduct?._id);

  const addtoCartHandle = () => {
    if (existingProduct) {
      toast.warn("Already added to cart", {
        theme: "dark",
        autoClose: 1000,
      });
    } else {
      setCart((prev: any) => [...prev, singleProduct]);
    }
  };

  const commentHandler = async () => {
    if (!user || !text) {
      toast.warn("Please Fill the Fields First", {
        autoClose: 1000,
        theme: "dark",
      });
    } else {
      const res = await fetch("http://localhost:3000/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: singleProduct._id,
          user,
          text,
        }),
      });
      if (res.status === 201) {
        commentGetter();
        toast.success("✅", {
          autoClose: 1000,
          theme: "dark",
        });
        setUser("");
        setText("");
      }
    }
  };

  return (
    <div className="relative">
      <img
        src={singleProduct?.image}
        alt={singleProduct?.title}
        className="fixed inset-0 -z-[2000] opacity-10 rounded-xl"
      />
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <img
          src={singleProduct?.image}
          alt={singleProduct?.title}
          className="rounded-xl shadow-2xl shadow-primary/30 w-1/3"
        />
        <div className="self-start p-5 flex flex-col gap-5 mt-10">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-primary">
              {singleProduct?.title}
            </h2>
            <div className="flex items-center gap-1">
              {new Array(rating ? rating : 0).fill("").map((rating: any) => (
                <Star
                  fill="yellow"
                  strokeWidth={1.2}
                  size={19}
                  className="text-yellow-400"
                />
              ))}
              {new Array(5 - (rating ? rating : 0))
                .fill("")
                .map((rating: any) => (
                  <Star
                    strokeWidth={1.2}
                    size={19}
                    className="text-yellow-400"
                  />
                ))}
            </div>
          </div>
          <span className="font-semibold rounded-xl border border-secondary-foreground self-start px-2 py-1 text-sm">
            {singleProduct?.category}
          </span>
          <p className="text-sm text-muted-foreground leading-7">
            {singleProduct?.desc}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-green-500">
              ${singleProduct?.price}
            </span>
            <Button onClick={addtoCartHandle}>Add to cart</Button>
          </div>
        </div>
      </div>
      <Heart
        fill={existing ? "red" : "transparent"}
        className="absolute top-5 right-16 text-red-500 cursor-pointer"
        onClick={addFavoriteHandler}
      />
      <div className="mt-10 p-2 flex flex-col gap-4">
        <h2 className="font-bold text-xl">Comments</h2>
        <div className="flex flex-col-reverse sm:flex-row gap-10 p-2">
          <div className="sm:w-1/2 flex flex-col gap-4">
            {sigleProductComments.length !== 0 ? (
              sigleProductComments.map((comment) => (
                <SingleComment comment={comment} />
              ))
            ) : (
              <span className="text-xl font-bold">
                There is no comments yet
              </span>
            )}
          </div>
          <div className="sm:w-1/2 flex flex-col gap-4 bg-secondary p-5 rounded-xl h-fit sm:sticky top-20">
            <h2 className="text-xl font-bold">Add Your Own Comment</h2>
            <Input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Name"
              className="border-primary"
            />
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Your Comment"
              rows={7}
              className="border-primary"
            />
            <Button onClick={commentHandler}>Send</Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleGamePage;
