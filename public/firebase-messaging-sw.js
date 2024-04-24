importScripts("https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/10.3.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyArQo0TUhlE1QDfaG4PRC-xXY9tYBA_-eo",
  authDomain: "login-fire-base-app.firebaseapp.com",
  projectId: "login-fire-base-app",
  storageBucket: "login-fire-base-app.appspot.com",
  messagingSenderId: "67526657392",
  appId: "1:67526657392:web:97ea621e3e62d89a4cfbb5",
  measurementId: "G-DWESQGQ07Q",
};

firebase.initializeApp(firebaseConfig);

if (firebase.messaging.isSupported()) {
  firebase.messaging();
}

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(" Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// // firebase.initializeApp(firebaseConfig);
// // const messaging = firebase.messaging();

// // messaging.onMessage(function (payload) {
// //   const notificationTitle = payload.notification.title;
// //   const notificationOptions = {
// //     body: payload.notification.body,
// //     icon: payload.notification.icon,
// //   };
// //   // console.log(notificationTitle,notificationOptions)

// //   if (!("Notification" in window)) {
// //     console.log("This browser does not support system notifications.");
// //   } else if (Notification.permission === "granted") {
// //     // If it's okay let's create a notification
// //     var notification = new Notification(notificationTitle, notificationOptions);
// //     notification.onclick = function (event) {
// //       event.preventDefault();
// //       window.open(payload.notification.click_action, "_blank");
// //       notification.close();
// //     };
// //   }
// // });

// // messaging.onBackgroundMessage((payload) => {
// //   console.log(
// //     "[firebase-messaging-sw.js] Received background message ",
// //     payload
// //   );

// //   const notificationTitle = "Background Message Title";
// //   const notificationOptions = {
// //     body: "Background Message body.",
// //     icon: "/firebase-logo.png",
// //   };

// //   //   const notificationTitle = payload.notification.title;
// //   //   const notificationOptions = {
// //   //     body: payload.notification.body,
// //   //     icon: payload.notification.image,
// //   //   };

// //   self.registration.showNotification(notificationTitle, notificationOptions);
// // });

// // ---------------------------------------------------------------
// // messaging.onMessage(function (payload) {
// //   const notificationTitle = payload.notification.title;
// //   const notificationOptions = {
// //     body: payload.notification.body,
// //     icon: payload.notification.icon,
// //   };
// //   // console.log(notificationTitle,notificationOptions)

// //   if (!("Notification" in window)) {
// //     console.log("This browser does not support system notifications.");
// //   } else if (Notification.permission === "granted") {
// //     // If it's okay let's create a notification
// //     var notification = new Notification(
// //       notificationTitle,
// //       notificationOptions
// //     );
// //     notification.onclick = function (event) {
// //       event.preventDefault();
// //       window.open(payload.notification.click_action, "_blank");
// //       notification.close();
// //     };
// //   }
// // });
