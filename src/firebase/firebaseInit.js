import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf2Jh9U_qtWVZj6Y8PWihxEbHM1cp4TDo",
  authDomain: "blog95-53088.firebaseapp.com",
  projectId: "blog95-53088",
  storageBucket: "blog95-53088.appspot.com",
  messagingSenderId: "314520936070",
  appId: "1:314520936070:web:2109c03a855a4d3e3d7b07"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
