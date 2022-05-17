// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBCwXUAl29n3OGuagNC2UBS3gnnl8uYkys",
  authDomain: "fir-auth-1132-703a5.firebaseapp.com",
  projectId: "fir-auth-1132-703a5",
  storageBucket: "fir-auth-1132-703a5.appspot.com",
  messagingSenderId: "936134271052",
  appId: "1:936134271052:web:e29618ff4e54f033f014e9",
  measurementId: "G-P9MLH1PLQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};

