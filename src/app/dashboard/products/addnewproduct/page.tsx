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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { Context } from "@/context/MainContext";

const storage = getStorage(app);

const AddNewProductPage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<any>(null);
  const [desc, setDesc] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [progress, setProgress] = useState(0);

  const { categories } = useContext(Context);

  const router = useRouter();

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

  const addingProductHandle = async () => {
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
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
        isFeatured: false,
      }),
    });
    if (res.status === 201) {
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
      setTimeout(() => {
        router.push("/dashboard/products");
      }, 1000);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-xl text-primary">Add new product</h2>
      <div className="mt-5 flex flex-col gap-4">
        {imageLink ? (
          <img
            alt="image"
            className="self-center rounded-xl"
            src={imageLink}
            width={400}
          />
        ) : (
          <div className="w-[200px] h-[200px] rounded-xl border border-border self-center flex items-center justify-center cursor-not-allowed">
            {progress ? <p>{progress.toFixed(1)}</p> : <h2> No Picture</h2>}
          </div>
        )}
        <div className="flex items-center gap-3">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
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
        <Button onClick={addingProductHandle}>Add</Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddNewProductPage;
