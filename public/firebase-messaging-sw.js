importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBMlD0XvlHHsSSksOwFsEwvYgmF5iEP3gQ",
    authDomain: "ezclaimsfirebase.firebaseapp.com",
    projectId: "ezclaimsfirebase",
    storageBucket: "ezclaimsfirebase.appspot.com",
    messagingSenderId: "938744934333",
    appId: "1:938744934333:web:5dc716586a71742386ecd4",
    measurementId: "G-4CBX3TP7PD"
};

console.log("dfkjngkjdfgnf")

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//       body: 'Background Message body.',
//       icon: '/firebase-logo.png'
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
// });

self.addEventListener('push', function(e) {
  const dataObj = e.data.json()
  const {data} = dataObj;
  const notificationTitle = dataObj?.notification?.title;
  const notificationOptions = {
    body: dataObj?.notification?.body
  }
  console.log(dataObj)
  // do some logic to fulfill the notificationOptions
  
  e.waitUntil(
    self.registration.showNotification(notificationTitle, notificationOptions)
  );
});