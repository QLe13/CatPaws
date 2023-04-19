import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { auth, provider } from './firebase';

import { signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

// if user is not signed in, redirect to sign in page
if (!auth.currentUser) {
  await signInWithRedirect(auth, provider);
}

// handle any redirect result
await getRedirectResult(auth).then((result) => {
  // If result is null, we have not been redirected
  if (result) {
    // This is the signed-in user
    const user = result.user;
    // This gives you a Google Access Token.
    const credential = GoogleAuthProvider.credentialFromResult(auth, result);
    const token = credential.accessToken;
  }
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.customData.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
