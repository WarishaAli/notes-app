import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB2kn0QC-s40UZL_vYaPP8Qd_FUjRVW7OE",
    authDomain: "next-notes-app-bf2b2.firebaseapp.com",
    projectId: "next-notes-app-bf2b2",
    storageBucket: "next-notes-app-bf2b2.appspot.com",
    messagingSenderId: "756048847282",
    appId: "1:756048847282:web:b3fa2708395cb8967544ab"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };