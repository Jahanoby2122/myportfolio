import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkShaGruJ0RVzT-2ZxEIE_wk8xWecRBBk",
  authDomain: "portfolio-9ab29.firebaseapp.com",
  projectId: "portfolio-9ab29",
  storageBucket: "portfolio-9ab29.firebasestorage.app",
  messagingSenderId: "368949701864",
  appId: "1:368949701864:web:d96c5ad9846160fdefed5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);