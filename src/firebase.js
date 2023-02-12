import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDjO7tkJb-1DWL2UPGdL69447zl1iD1CYc",
  authDomain: "chat-41caa.firebaseapp.com",
  projectId: "chat-41caa",
  storageBucket: "chat-41caa.appspot.com",
  messagingSenderId: "1082783871522",
  appId: "1:1082783871522:web:a245d4cbe443386c28507b"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();