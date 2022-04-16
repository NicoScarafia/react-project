import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTODOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINSENDERID,
  appId: process.env.REACT_APP_APPID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)
export function useAuth() {
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => { setCurrentUser(user) })
    return unsub
  }, [])
  return currentUser
}