import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { auth, googleProvider, db } from './firebase';
import { getDoc, doc } from 'firebase/firestore';

import { signInWithRedirect, getRedirectResult, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const [curUser, setCurUser] = React.useState<User | null>(null);
onAuthStateChanged(auth, async (authUser) => {
  if (authUser) {
    const dbUser: UserData | undefined = (await getDoc(doc(db, "users", authUser.uid))).data() as UserData;
    setCurUser(
      Object.assign(dbUser, {
        uid: authUser.uid,
        email: authUser.email,
        username: authUser.displayName,
      }) as User
    )
  } else {
    setCurUser(null);
  }
});

root.render(
  <React.StrictMode>
    <App curUser={curUser} />
  </React.StrictMode>
);
