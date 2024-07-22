import { getMessaging, getToken, onMessage } from "firebase/messaging";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import app, { messaging, onMessageListener } from "../../firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDsfU6kWMS9xjiLPWlDq2_CCIlJd2p-QIM",
  authDomain: "social-network-login-app.firebaseapp.com",
  projectId: "social-network-login-app",
  storageBucket: "social-network-login-app.appspot.com",
  messagingSenderId: "619944841448",
  appId: "1:619944841448:web:09bb7a4926d29e4206f95d",
  measurementId: "G-QJF0MYQPM3",
};

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect 01");

    // Initialize Firebase
    const firebase = initializeApp(firebaseConfig);
    const messaging = getMessaging(firebase);

    console.log(messaging, "messaging of home page");

    onMessage(messaging, (payload) => {
      console.log("payload", payload);
    });

    // onMessageListener();
  }, []);

  useEffect(() => {
//    requestPermission();
  }, []);

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();

    console.log(permission, "permission 001");

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
