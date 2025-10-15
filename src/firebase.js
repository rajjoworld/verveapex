// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfuKVSXXIBy4GghRuuq3OpfEIMFBb17ik",
  authDomain: "verveapex.firebaseapp.com",
  projectId: "verveapex",
  storageBucket: "verveapex.firebasestorage.app",
  messagingSenderId: "187366662235",
  appId: "1:187366662235:web:9272b339acb595a3a0df7e",
  measurementId: "G-PXVEJDKF6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);