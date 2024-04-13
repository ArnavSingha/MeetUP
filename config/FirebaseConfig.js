// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meethub-4fae0.firebaseapp.com",
  projectId: "meethub-4fae0",
  storageBucket: "meethub-4fae0.appspot.com",
  messagingSenderId: "962039188696",
  appId: "1:962039188696:web:b398923a41de476cc09bad",
  measurementId: "G-ZWVMH67XYE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

