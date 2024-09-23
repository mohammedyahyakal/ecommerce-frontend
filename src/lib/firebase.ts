// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCSZFYPN-4BeURMMpdFUc9veHg0_vrwnWg",
  authDomain: "our-shop-e141d.firebaseapp.com",
  projectId: "our-shop-e141d",
  storageBucket: "our-shop-e141d.appspot.com",
  messagingSenderId: "757518928179",
  appId: "1:757518928179:web:a720a0cc5fc0b2266d1646",
  measurementId: "G-41BEDMRM5R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
