// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getMessaging, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDsfU6kWMS9xjiLPWlDq2_CCIlJd2p-QIM",
  authDomain: "social-network-login-app.firebaseapp.com",
  projectId: "social-network-login-app",
  storageBucket: "social-network-login-app.appspot.com",
  messagingSenderId: "619944841448",
  appId: "1:619944841448:web:09bb7a4926d29e4206f95d",
  measurementId: "G-QJF0MYQPM3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

// console.log(messaging, "messaging of firebase component");

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
