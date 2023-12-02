import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
// import { Routes } from "react-router"
// import { BrowserRouter as routs} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <App />
  </BrowserRouter>
 
  
);


