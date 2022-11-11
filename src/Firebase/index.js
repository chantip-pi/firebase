// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz26BUZkmm_masG5fXOtyxCA3ogfLFNCc",
  authDomain: "fir-devcamp-example.firebaseapp.com",
  projectId: "fir-devcamp-example",
  storageBucket: "fir-devcamp-example.appspot.com",
  messagingSenderId: "374338924592",
  appId: "1:374338924592:web:a5b28aa0258b82b7f73df5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);