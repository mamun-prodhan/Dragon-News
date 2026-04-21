// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDijGGcOUtr2XTr6Xj33Tukyeq5WObCxfU",
  authDomain: "dragon-news-58d1b.firebaseapp.com",
  projectId: "dragon-news-58d1b",
  storageBucket: "dragon-news-58d1b.firebasestorage.app",
  messagingSenderId: "145512372625",
  appId: "1:145512372625:web:11f9021800926bb6af2230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;