import { useEffect } from "react";
import { useState } from "react";
import "./Auth.css";
import { auth, googleProvider } from "../../firebase";
import {
  getRedirectResult,
  signInWithEmailAndPassword,
  signInWithRedirect,
  AuthError,
} from "firebase/auth";
import { redirect } from "react-router-dom";
import { useFormState } from "../../utils";

const initialState = {
  email: "",
  password: "",
};

const Auth = () => {
  const [form, _, onChange] = useFormState(initialState);
  const [loadingRedirect, setLoadingRedirect] = useState(true);

  const handleSubmit = async (event) => {
    // prevent the page reloading
    event.preventDefault();
    await signInWithEmailAndPassword(auth, form.email, form.password)
      .then(() => {
        redirect("/");
      })
      .catch(() => {
        window.alert("Email or password is incorrect!");
      });
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        setLoadingRedirect(false);
        if (result?.user) {
          redirect("/");
        }
      })
      .catch((error: AuthError) => {
        setLoadingRedirect(false);
        const msgs = {
          "auth/web-storage-unsupported":
            "Web storage is not supported or enabled, but required for this sign in. Please enable web storage in your browser or try another sign in method.",
        };
        if (msgs[error.code]) {
          window.alert(msgs[error.code]);
        } else {
          window.alert(error.message);
        }
      });
  }, []);

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                placeholder="user@gmail.com"
                autoComplete="username"
                onChange={onChange}
                required
              />
            </div>
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                onChange={onChange}
                required
              />
            </div>
            <div className="auth__form-container_fields-content_button button">
              <button>Sign In</button>
            </div>
          </form>
          {loadingRedirect ? (
            <p>Login with Google</p>
          ) : (
            <a
              href="https://accounts.google.com/login"
              onClick={async (e) => {
                e.preventDefault();
                await signInWithRedirect(auth, googleProvider);
              }}
            >
              Login with Google
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
