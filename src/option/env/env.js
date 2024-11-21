
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgDSWKF2TXeuUKjIzDgjzvQaaIJn3xzvI",
  authDomain: "shop-33b12.firebaseapp.com",
  databaseURL: "https://shop-33b12-default-rtdb.firebaseio.com",
  projectId: "shop-33b12",
  storageBucket: "shop-33b12.firebasestorage.app",
  messagingSenderId: "512937178535",
  appId: "1:512937178535:web:a564f45ed854c3527cf282"
};

export const app = initializeApp(firebaseConfig);