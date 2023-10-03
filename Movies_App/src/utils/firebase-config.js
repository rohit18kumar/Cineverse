// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClBFEVCkkPPnuclt_O1O4kfXhkEsOt3BQ",
  authDomain: "ai-powered-moviesapp.firebaseapp.com",
  projectId: "ai-powered-moviesapp",
  storageBucket: "ai-powered-moviesapp.appspot.com",
  messagingSenderId: "430863971423",
  appId: "1:430863971423:web:d2901b4ad144f3800797ea",
  measurementId: "G-R9KJYE7KF4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
