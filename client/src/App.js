import React from 'react';
import {BrowserRouter as PageRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/index.js";
import Jumbotron from "./components/Jumbotron"



import './App.css';

function App() {
  return (
   <div>
        <Navbar />
        <Jumbotron />

  </div>  
    
  );
}

export default App;