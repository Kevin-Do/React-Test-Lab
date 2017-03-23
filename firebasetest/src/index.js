import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

 const config = {
    apiKey: "AIzaSyBkjcdm-1ODw47ondjyoialDwmEN0jWXcg",
    authDomain: "webapptest-47f98.firebaseapp.com",
    databaseURL: "https://webapptest-47f98.firebaseio.com",
    storageBucket: "webapptest-47f98.appspot.com",
    messagingSenderId: "867930302360"
  };

firebase.initializeApp(config);

const db = firebase.database();
const dbRef = db.ref().child('Parking Lot 12');


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
