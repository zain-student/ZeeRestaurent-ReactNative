import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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
