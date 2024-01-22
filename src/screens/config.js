import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//  "@react-native-async-storage/async-storage": "1.18.2"
const firebaseConfig = {
  apiKey: "AIzaSyBT_2nnoNSvdZetcfaB20Yp22fm0hKT1-s",
  authDomain: "zeerestaurent-reactnative.firebaseapp.com",
  projectId: "zeerestaurent-reactnative",
  storageBucket: "zeerestaurent-reactnative.appspot.com",
  messagingSenderId: "609907560969",
  appId: "1:609907560969:web:d8bef331cfc3995a9f5ed8",
  measurementId: "G-P8FXVEZEHV",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
// const app = initializeApp(firebaseConfig);
