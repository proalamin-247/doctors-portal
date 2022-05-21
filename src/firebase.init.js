// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqxzsJCl5tgG4QYhFyWS974NGH4yHmV10",
  authDomain: "doctors-portal-c2d57.firebaseapp.com",
  projectId: "doctors-portal-c2d57",
  storageBucket: "doctors-portal-c2d57.appspot.com",
  messagingSenderId: "995642088939",
  appId: "1:995642088939:web:399e4439e23e04edb84dae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;