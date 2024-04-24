import React, { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const onLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result, "result 11111");

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential, "credential 22222");

        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      <main>
        <section>
          <div>
            <p> FocusApp </p>

            <form>
              <div>
                <label htmlFor="email-address">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button onClick={onLogin}>Login</button>
              </div>
            </form>

            <p className="text-sm text-white text-center">
              No account yet? <NavLink to="/sign-up">Sign up</NavLink>
            </p>
          </div>
          <div>
            <button onClick={onLoginWithGoogle}>Login with google</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
