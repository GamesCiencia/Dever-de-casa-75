import firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHo46zh-Pyo0mC00TBxgPyeJ6NKlfLXds",
  authDomain: "dever-de-casa-75.firebaseapp.com",
  projectId: "dever-de-casa-75",
  storageBucket: "dever-de-casa-75.appspot.com",
  messagingSenderId: "1010968831138",
  appId: "1:1010968831138:web:e690221abacb99d194e3fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.firestore();
