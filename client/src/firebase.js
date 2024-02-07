// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5b5a5.firebaseapp.com",
  projectId: "mern-estate-5b5a5",
  storageBucket: "mern-estate-5b5a5.appspot.com",
  messagingSenderId: "173006162834",
  appId: "1:173006162834:web:6c7ba182c96cef31de4f4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);