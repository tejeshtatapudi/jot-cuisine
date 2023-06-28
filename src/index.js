import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './CSS/aboutUs.css'
import './CSS/cart.css'
import './CSS/ContactUs.css'
import './CSS/create-new.css'
import './CSS/index.css'
import './CSS/menu_style.css'
import './CSS/style.css'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
