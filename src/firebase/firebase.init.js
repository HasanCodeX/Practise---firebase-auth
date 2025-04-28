//don not share this file with anyone

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArKrM2kEHYe830CqZSxCZarwPfq6egKLY",
  authDomain: "practise---firebase-auth.firebaseapp.com",
  projectId: "practise---firebase-auth",
  storageBucket: "practise---firebase-auth.firebasestorage.app",
  messagingSenderId: "840779043842",
  appId: "1:840779043842:web:00eb5c7e3df94f477cc31b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);