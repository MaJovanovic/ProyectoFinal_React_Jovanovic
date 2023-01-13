import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
    apiKey: "AIzaSyDGvVuFYgumKwwzbzbUMJTuns1F9rDw6nk",
    authDomain: "tienda-2d3c0.firebaseapp.com",
    projectId: "tienda-2d3c0",
    storageBucket: "tienda-2d3c0.appspot.com",
    messagingSenderId: "815202710276",
    appId: "1:815202710276:web:ac5c661b6a93a8304a5651"
};
  
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
    <App />
//  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
