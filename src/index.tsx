import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/fontawesome.css'
import './css/animate.css'
import './css/owl.css'
import './css/flex-slider.css'
import './css/templatemo-lugx-gaming.css'

import App from './App';
import reportWebVitals from './reportWebVitals';
import XLSX from "xlsx"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
