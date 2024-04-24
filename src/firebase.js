// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getMessaging, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyArQo0TUhlE1QDfaG4PRC-xXY9tYBA_-eo",
  authDomain: "login-fire-base-app.firebaseapp.com",
  projectId: "login-fire-base-app",
  storageBucket: "login-fire-base-app.appspot.com",
  messagingSenderId: "67526657392",
  appId: "1:67526657392:web:97ea621e3e62d89a4cfbb5",
  measurementId: "G-DWESQGQ07Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
