// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE || "",
  authDomain: "gamestore-5d5c5.firebaseapp.com",
  projectId: "gamestore-5d5c5",
  storageBucket: "gamestore-5d5c5.appspot.com",
  messagingSenderId: "273646793042",
  appId: "1:273646793042:web:b3df3eb91bbd75ec048a8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);