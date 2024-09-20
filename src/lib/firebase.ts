// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn_4gq05vi5yRIHIKMqFadU6W_aCzaMwY",
  authDomain: "topkal.firebaseapp.com",
  projectId: "topkal",
  storageBucket: "topkal.appspot.com",
  messagingSenderId: "9405864830",
  appId: "1:9405864830:web:85750998d0a0dfae73712f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
