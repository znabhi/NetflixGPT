// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUYAUZKUJrzZb9FE-vrBOqfhqgU7MtkqQ",
  authDomain: "netflixgpt-d12a7.firebaseapp.com",
  projectId: "netflixgpt-d12a7",
  storageBucket: "netflixgpt-d12a7.appspot.com",
  messagingSenderId: "545628673318",
  appId: "1:545628673318:web:76c15c6fb926e4aa6d9de7",
  measurementId: "G-BNMGNSF6G0",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
