"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContext, useEffect, useState } from "react";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/configs/firebase";

import { Context } from "@/context/MainContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const storage = getStorage(app);

const EditProductPage = ({ params }: { params: any }) => {
  const { products, categories } = useContext(Context);

  const product = products.find((product: any) => product._id === params.id);

  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [rating, setRating] = useState(product.rating);
  const [category, setCategory] = useState(product.category);
  const [image, setImage] = useState<any>(null);
  const [desc, setDesc] = useState(product.desc);
  const [imageLink, setImageLink] = useState(product.image);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const upload = () => {
      const uniqueName = new Date().getTime() + image.name;
      const storageRef = ref(storage, uniqueName);

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageLink(downloadURL);
          });
        }
      );
    };

    image && upload();
  }, [image]);

  const updateHandler = async () => {
    const res = await fetch(
      `http://localhost:3000/api/products/${product._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          rating,
          category,
          image: imageLink,
          desc,
        }),
      }
    );
    if (res.status === 200) {
      toast.success("Product added successfully", {
        theme: "dark",
        autoClose: 1000,
      });
      setTitle("");
      setPrice("");
      setRating("");
      setCategory("");
      setImage(null);
      setDesc("");
    }
  };

  return (
    <div>
      <h2 className="font-bold text-xl text-primary">Edit Product</h2>
      {imageLink ? (
        <img
          alt="image"
          className="self-center rounded-xl"
          src={imageLink}
          width={400}
        />
      ) : (
        <div className="w-[200px] h-[200px] rounded-xl border border-border  mx-auto flex items-center justify-center cursor-not-allowed">
          {progress ? <p>{progress.toFixed(1)}</p> : <h2> No Picture</h2>}
        </div>
      )}
      <div className="mt-5 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Name"
            type="text"
            required
          />
          <Input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            type="number"
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <Input
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            type="number"
            placeholder="Rating"
            max={5}
            min={0}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue={"DEFALUT"}>Select a category</option>
            {categories.map((cat: any) => (
              <option key={cat._id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="picture" className="text-sm pl-1">
            Select a Picture
          </label>
          <Input
            onChange={(e) => setImage(e.target.files[0])}
            id="picture"
            type="file"
            max={5}
            min={0}
          />
        </div>
        <Textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          rows={6}
        />
        <Button onClick={updateHandler}>Update</Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditProductPage;
