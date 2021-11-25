import React from 'react';
import './App.css';
import Header from './components/Header';
import Bodycontent from './components/Bodycontent';
import Footerdev from './components/Footerdev';


function App() {
  return (
    <div className="App">
      <div className="container-app">
      <Header/>
      <Bodycontent/>
      <Footerdev/>
      </div>
    </div>
  );
}

export default App;
