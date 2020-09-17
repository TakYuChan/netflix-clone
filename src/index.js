import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyles } from "./globalStyles";
import { FirebaseContext } from "./context/firebaseContext";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import * as serviceWorker from "./serviceWorker";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAQgAUcpnpArgun8L8Gbso7YcFBLbpkH2E",
  authDomain: "netflix-2438f.firebaseapp.com",
  databaseURL: "https://netflix-2438f.firebaseio.com",
  projectId: "netflix-2438f",
  storageBucket: "netflix-2438f.appspot.com",
  messagingSenderId: "1095683748444",
  appId: "1:1095683748444:web:d91c2076109be089bfac99",
  measurementId: "G-DF7TR5XXK3",
};

const firebase2 = firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase2 }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
