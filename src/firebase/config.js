import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAgvfD08m7_fyEwsBJJ0J-Pj0bs1oGw5JE",
  authDomain: "ecommerce-comics.firebaseapp.com",
  projectId: "ecommerce-comics",
  storageBucket: "ecommerce-comics.appspot.com",
  messagingSenderId: "38074881173",
  appId: "1:38074881173:web:4ae5a759a95b19d3fc379c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

