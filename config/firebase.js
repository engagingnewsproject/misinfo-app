// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, browserLocalPersistence } from "firebase/auth";

import Constants from 'expo-constants';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAsGCi7VgxuovHAbY4tRDAKDRN6sxw8MHo',
  authDomain: "misinfo-5d004.firebaseapp.com",
  projectId: "misinfo-5d004",
  storageBucket: "misinfo-5d004.appspot.com",
  messagingSenderId: "2581605663",
  appId: "1:2581605663:web:5c1f1a43d80568fd5b542a",
  measurementId: "G-L4GJJGV0V1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth(app);