import React from 'react';
// import { BrowserRouter};
import { Routes, Route} from "react-router-dom";
// import ReactDOM from 'react-dom/client';

import Header from './Header.js';
import Home from './Home.js';
import Product from './product.js';
export default function App() {
  return (<>
  
            <Header/>
  <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":userId" element={<Product />} />
  </Routes>
     
    </>
  );
}


