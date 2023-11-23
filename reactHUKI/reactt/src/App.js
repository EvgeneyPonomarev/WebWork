import React,{useState, useEffect, useRef} from 'react';
import './App.css';
import Components from './Component/Components.js'
import Header from './header';
import Footer from './Footer'; 

function App() {

  return (<div>
    <Header />
    <Components/>
    <Footer />
  </div>);
}

export default App;