import React from "react";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import FindClasses from "./components/FindClasses/FindClasses";
import NavBar from "./components/Navbar/NavBar";
import Auth from "./components/Landing/Auth";
import CreateClasses from "./components/CreateClasses/CreateClasses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth, db } from "./firebase";
import { getDoc, doc, setDoc } from "firebase/firestore/lite";

import { getRedirectResult, onAuthStateChanged } from "firebase/auth";

const App = () => {
  // loading state for user data fetching
  const [loading, setLoading] = React.useState(true);
  // the current user
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    // listen for auth state changes and update user state accordingly
    onAuthStateChanged(auth, async (authUser) => {
      if (
        authUser &&
        (authUser.uid !== user?.uid ||
          authUser.email !== user?.email ||
          authUser.displayName !== user?.username)
      ) {
        const userDoc = await getDoc(doc(db, "users", authUser.uid));
        var dbUser: UserData;
        if (!userDoc.exists()) {
          dbUser = {
            isTeacher: false,
            canRegister: false,
            specialRegister: false,
            classes: [],
            waitlisted: [],
            saved: [],
          };
          await setDoc(doc(db, "users", authUser.uid), {
            uid: authUser.uid,
            ...dbUser,
          });
        } else {
          dbUser = userDoc.data() as UserData;
        }
        setUser({
          ...dbUser,
          uid: authUser.uid,
          email: authUser.email,
          username: authUser.displayName,
        } as User);
      } else {
        setUser(null);
      }
      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    if (!user) {
      // if user is not logged in, redirect to login page
      return <Auth />;
    }
    return (
      <div>
        <Router>
          <NavBar isTeacher={user.isTeacher} />
          <Routes>
            <Route path="/" element={<Landing user={user} />} />
            <Route path="/schedule" element={<Landing user={user} />} />
            <Route path="/register" element={<Register user={user} />} />
            <Route path="/createclasses" element={<CreateClasses />} />
            <Route path="/findclasses" element={<FindClasses user={user} />} />
          </Routes>
        </Router>
      </div>
    );
  }
};

export default App;
