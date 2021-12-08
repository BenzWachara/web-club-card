import React from 'react';
import './App.css';
import Header from './components/Header';
import King from './components/King';
import Footerdev from './components/Footerdev';
import Jackcard from './components/Jack';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Kingcard from './components/King';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="container-app">
      <Header/>
      <Routes>
      <Route exact path="/" element={<Jackcard/>}/>
      <Route path="/jack" element={<Jackcard/>}/>
      <Route path="/king" element={<Kingcard/>}/>
      </Routes>
      <div id="idBgOverlay" className="bgOverlay"></div>
      <Footerdev/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
