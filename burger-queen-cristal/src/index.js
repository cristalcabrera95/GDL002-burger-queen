import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import './index.css';
import App from './App';
import Counter from './components/Counter';
import Total from './components/Total'
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyCYgj0FCr-y0zumeLCF2iWUTatwkiw8RMo",
    authDomain: "burger-queen-f47eb.firebaseapp.com",
    databaseURL: "https://burger-queen-f47eb.firebaseio.com",
    projectId: "burger-queen-f47eb",
    storageBucket: "burger-queen-f47eb.appspot.com",
    messagingSenderId: "46990939306",
    appId: "1:46990939306:web:4683c698cfc893de"
});
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Counter />, document.getElementById('prueba'));
ReactDOM.render(<Total/>, document.getElementById('pruebafood'));

serviceWorker.unregister();
