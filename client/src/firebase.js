// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

export const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/calendar');
provider.addScope('https://www.googleapis.com/auth/gmail.insert');
// more scopes... e.g. classroom.courses ... reference: https://developers.google.com/identity/protocols/oauth2/scopes?authuser=0
provider.setCustomParameters({
    'login_hint': 'user@trinity.edu'
});

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOJuihUBuAT6epx5xfxGmPFi08VvbwqkE",
    authDomain: "cspace-51bd4.firebaseapp.com",
    projectId: "cspace-51bd4",
    storageBucket: "cspace-51bd4.appspot.com",
    messagingSenderId: "906847926909",
    appId: "1:906847926909:web:4f342d82b46d484a200f14",
    measurementId: "G-4TJFWPWJ2T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});

// docs setup: https://firebase.google.com/docs/web/setup
// firebase rules: https://firebase.google.com/docs/rules/basics
// claims?: https://firebase.google.com/docs/auth/admin/custom-claims
