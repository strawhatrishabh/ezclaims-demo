import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBMlD0XvlHHsSSksOwFsEwvYgmF5iEP3gQ",
  authDomain: "ezclaimsfirebase.firebaseapp.com",
  projectId: "ezclaimsfirebase",
  storageBucket: "ezclaimsfirebase.appspot.com",
  messagingSenderId: "938744934333",
  appId: "1:938744934333:web:5dc716586a71742386ecd4",
  measurementId: "G-4CBX3TP7PD"
};

const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);