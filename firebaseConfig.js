import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU7MKmMR10x9TbHp8AFEXFGPbxWAFoPgg",
  authDomain: "docs-clone-c7abf.firebaseapp.com",
  projectId: "docs-clone-c7abf",
  storageBucket: "docs-clone-c7abf.appspot.com",
  messagingSenderId: "391115242369",
  appId: "1:391115242369:web:367a5c8e09b5748cc30680",
  measurementId: "G-34MY45PKBB"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);
