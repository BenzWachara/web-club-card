import React from 'react';
import './App.css';
import Header from './components/Header';
import King from './components/King';
import Footerdev from './components/Footerdev';
import Jackcard from './components/Jack';
import Queencard from './contents/Queen';
import Kingcard from './components/King';
import Jokercard from './contents/Joker';
import Contactus from './contents/Contact';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="container-app">
      <Header/>
      <Routes>
      <Route exact path="/" element={<Jackcard/>}/>
      <Route path="/jack" element={<Jackcard/>}/>
      <Route path="/queen" element={<Queencard/>}/>
      <Route path="/king" element={<Kingcard/>}/>
      <Route path="/joker" element={<Jokercard/>}/>
      <Route path="/contact" element={<Contactus/>}/>
      </Routes>
      <div id="idBgOverlay" className="bgOverlay"></div>
      <Footerdev/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
