// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

// firebase/firestore
// doc -- Gets a DocumentReference instance that refers to the document at the specified absolute path.
// getFirestore -- Returns the existing default Firestore instance that is associated with the provided
// getDoc -- Reads the document referred to by this DocumentReference.
// setDoc -- Writes to the document referred to by this DocumentReference.
//            If the document does not yet exist, it will be created.

import { doc, getFirestore, getDoc, setDoc } from "firebase/firestore";
import { useRef } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo_LTZHp0QwpzXBpNctaZL3AIM0_RJvoI",
  authDomain: "style-shop-db.firebaseapp.com",
  databaseURL: "https://style-shop-db.firebaseio.com",
  projectId: "style-shop-db",
  storageBucket: "style-shop-db.appspot.com",
  messagingSenderId: "986039959679",
  appId: "1:986039959679:web:b910856c934bc1be837f4a",
  measurementId: "G-PJMVSQXYE6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creatUserDocFromAuth = async (userAuth) => {
  const docRef = await doc(db, "user", userAuth.uid);
  const docSnapshot = await getDoc(docRef);

  if (!docSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(docRef, { displayName, email, photoURL, createdAt });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return docRef;
};
