"use client";

import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const MainContext = ({children}) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState();
  const [cart  , setCart] = useState()

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) 
    setFavorites(storedFavorites || []);
    const storedCart = JSON.parse(localStorage.getItem("cart")) 
    setCart(storedCart || []);
  }, []);

  useEffect(() => {
    if (cart?.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }else if(cart?.length === 0){
      localStorage.removeItem("cart");
    }
  }, [cart]);
  
  useEffect(() => {
    if (favorites?.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }else if(favorites?.length === 0){
      localStorage.removeItem("favorites");
    }
  }, [favorites]);

  
  const getProducts = () => {
    fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, []);


  const getCategories = () => {
    fetch("http://localhost:3000/api/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  useEffect(()=>{
     getCategories()
  },[])

  return (
    <>
     <Context.Provider value={{categories , setCategories , getCategories ,  products , setProducts , getProducts , favorites , setFavorites , cart , setCart}} >
      {children}
     </Context.Provider>
    </>
  );
};

export default MainContext;
