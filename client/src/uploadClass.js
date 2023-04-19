const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");
const usersData = require("./classes.json");

const firebaseConfig = {
    apiKey: "AIzaSyDOJuihUBuAT6epx5xfxGmPFi08VvbwqkE",
    authDomain: "cspace-51bd4.firebaseapp.com",
    projectId: "cspace-51bd4",
    storageBucket: "cspace-51bd4.appspot.com",
    messagingSenderId: "906847926909",
    appId: "1:906847926909:web:4f342d82b46d484a200f14",
    measurementId: "G-4TJFWPWJ2T"
};

initializeApp(firebaseConfig);
const db = getFirestore();

async function uploadUsers() {
  const usersCollection = collection(db, "classes");

  for (const user of usersData) {
    try {
      const docRef = await addDoc(usersCollection, user);
      console.log(`Class added with ID: ${docRef.id}`);
    } catch (e) {
      console.error("Error adding class:", e);
    }
  }
}

uploadUsers();
