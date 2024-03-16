// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-25ea2.firebaseapp.com",
  projectId: "mern-blog-25ea2",
  storageBucket: "mern-blog-25ea2.appspot.com",
  messagingSenderId: "401379425734",
  appId: "1:401379425734:web:91547e4285d3a9e97346c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

