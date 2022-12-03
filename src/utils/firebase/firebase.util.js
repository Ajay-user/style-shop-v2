// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// getRedirectResult -- Returns a UserCredential from the redirect-based sign-in flow.
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

// firebase/firestore
// doc -- Gets a DocumentReference instance that refers to the document at the specified absolute path.
// getFirestore -- Returns the existing default Firestore instance that is associated with the provided
// getDoc -- Reads the document referred to by this DocumentReference.
// setDoc -- Writes to the document referred to by this DocumentReference.
//            If the document does not yet exist, it will be created.

import { doc, getFirestore, getDoc, setDoc } from "firebase/firestore";

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
export const auth = getAuth(app);
export const db = getFirestore(app);

// GOOGLE SIGN-IN
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

// SIGN-IN WITH EMAIL AND PASSWORD --util
export const firebaseSignInWithEmailAndPassword = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);
// we can avoid the below steps as we account for it in user-context
// const { user } = await signInWithEmailAndPassword(auth, email, password);
// const userRef = await creatUserDocFromAuth(user);
// setCurrentUser(userRef);

// SIGN OUT A USER -- Util
export const signOutUser = async () => await auth.signOut();

// CHECK USER EXIST OR NOT IN USER COLL-- IF NOT THEN CREATE A NEW USER -- RETURN USER-REF -- Util
export const creatUserDocFromAuth = async (userAuth, additionalInfo) => {
  const docRef = await doc(db, "user", userAuth.uid);
  const docSnapshot = await getDoc(docRef);

  if (!docSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return docRef;
};

// FIREBASE : AUTH CHANGE LISTENER --util
export const firebaseAuthChangeListener = (cb) => auth.onAuthStateChanged(cb);
