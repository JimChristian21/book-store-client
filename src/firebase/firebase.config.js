// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxJvsXGCoeRtmQTwHo54v05vn0ehCQGTM",
  authDomain: "book-inventory-e67ab.firebaseapp.com",
  projectId: "book-inventory-e67ab",
  storageBucket: "book-inventory-e67ab.appspot.com",
  messagingSenderId: "290309244602",
  appId: "1:290309244602:web:708eb3d41532cec4e9e483",
  measurementId: "G-RQ5WNZDHX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;