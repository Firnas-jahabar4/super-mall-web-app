
// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbstsJwF6iOnOE4lisnrYbp4GWjMNADTw",
  authDomain: "super-mall-web-app-b8581.firebaseapp.com",
  projectId: "super-mall-web-app-b8581",
  storageBucket: "super-mall-web-app-b8581.firebasestorage.app",
  messagingSenderId: "23471086671",
  appId: "1:23471086671:web:b8ff0c2ba3791e5f5c9e3a",
  measurementId: "G-DNN3BEM9XR",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
