// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYcyeF_-rHQWlrgKccTOFL9bhD4XeuJgY",
  authDomain: "sports-house-185ed.firebaseapp.com",
  projectId: "sports-house-185ed",
  storageBucket: "sports-house-185ed.appspot.com",
  messagingSenderId: "1055628170336",
  appId: "1:1055628170336:web:0d9b8f3ef3f4f1612a9f05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth