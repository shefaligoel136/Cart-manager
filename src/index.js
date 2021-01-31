  import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWo69ieGshSGBVa8ewJSwphEAEEG1T1kM",
  authDomain: "cart-9538b.firebaseapp.com",
  projectId: "cart-9538b",
  storageBucket: "cart-9538b.appspot.com",
  messagingSenderId: "876074314696",
  appId: "1:876074314696:web:e4ead22a0db8ec86ba6efd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

