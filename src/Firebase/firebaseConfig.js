// src/Firebase/firebaseConfig.js
// Rellena los campos con los valores de tu proyecto Firebase.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcj3NupdI4w4hAKYIjpITEb7QDzd44tLI",
  authDomain: "test-joviat.firebaseapp.com",
  projectId: "test-joviat",
  storageBucket: "test-joviat.firebasestorage.app",
  messagingSenderId: "802496770097",
  appId: "1:802496770097:web:dbd918e72a6a47a7e0a510",
  measurementId: "G-Z98FR9EC9K"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);