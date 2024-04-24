import { getMessaging, getToken, onMessage } from "firebase/messaging";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import app, { messaging, onMessageListener } from "../../firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyArQo0TUhlE1QDfaG4PRC-xXY9tYBA_-eo",
  authDomain: "login-fire-base-app.firebaseapp.com",
  projectId: "login-fire-base-app",
  storageBucket: "login-fire-base-app.appspot.com",
  messagingSenderId: "67526657392",
  appId: "1:67526657392:web:97ea621e3e62d89a4cfbb5",
  measurementId: "G-DWESQGQ07Q",
};

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    requestPermission();
  }, []);

  useEffect(() => {
    console.log("useEffect 01");

    // Initialize Firebase
    const firebase = initializeApp(firebaseConfig);
    const messaging = getMessaging(firebase);

    onMessage(messaging, (payload) => {
      console.log("payload", payload);
    });

    // onMessageListener();
  }, []);

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const currentToken = await getToken(messaging, {
        vapidKey:
          "BJjZk4A_XoTkNcr-sWQfSZx6v62v0waaYisTg0Z726mCiDz5v1zfgR3o1JKAXHEUzwq5ML5SgE3bMcF-j_Hq0qc",
      });
      console.log(currentToken, "currentToken");
    }
  };

  // onMessageListener()
  //   .then((payload) => {
  //     console.log(payload, "payload home tsx");

  //     // setNotification({title: payload?.notification?.title, body: payload?.notification?.body});
  //   })
  //   .catch((err) => console.log("failed: ", err));

  // useEffect(() => {
  //   console.log("8888888888888888888");

  //   test();
  // }, []);

  // const test = async () => {
  //   const res = await onMessageListener();
  //   console.log(res, " res useEffect 222222");
  // };

  return (
    <div>
      <div>This is home page</div>
      <div>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
