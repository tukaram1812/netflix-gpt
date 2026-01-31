// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTV6Se9gSD8hKRe_Nq2KZ93Pb3L0dXQbA",
  authDomain: "netflixgpt-97a85.firebaseapp.com",
  projectId: "netflixgpt-97a85",
  storageBucket: "netflixgpt-97a85.firebasestorage.app",
  messagingSenderId: "858688577181",
  appId: "1:858688577181:web:fb6529498b9b6e16203e74",
  measurementId: "G-LECNLVXRW6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
