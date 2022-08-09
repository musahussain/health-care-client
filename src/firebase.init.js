// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfsSUs0oh-q-wYxrbUsIFKAib7PczK8bQ",
  authDomain: "health-care-be77e.firebaseapp.com",
  projectId: "health-care-be77e",
  storageBucket: "health-care-be77e.appspot.com",
  messagingSenderId: "45757918402",
  appId: "1:45757918402:web:e82c79c3ec871749af5f5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;