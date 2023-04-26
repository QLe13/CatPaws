// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebaseConfig from "./assets/firebase.config.json";

export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/calendar');
googleProvider.addScope('https://www.googleapis.com/auth/gmail.insert');
// more scopes... e.g. classroom.courses ... reference: https://developers.google.com/identity/protocols/oauth2/scopes?authuser=0
// googleProvider.setCustomParameters({
//     'login_hint': 'user@trinity.edu'
// });

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

// docs setup: https://firebase.google.com/docs/web/setup
// firebase rules: https://firebase.google.com/docs/rules/basics
// claims?: https://firebase.google.com/docs/auth/admin/custom-claims
