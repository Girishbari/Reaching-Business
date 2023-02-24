// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLfgewRThjExwl_cmCDsDjcZhhPa4hBmM",
  authDomain: "reaching-buisne.firebaseapp.com",
  projectId: "reaching-buisne",
  storageBucket: "reaching-buisne.appspot.com",
  messagingSenderId: "896915505967",
  appId: "1:896915505967:web:071b801ed8351c9104d7da",
  measurementId: "G-SXKM4VVH7F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);