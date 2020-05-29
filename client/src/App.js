import React from 'react';
import {BrowserRouter as PageRouter, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/index.js";
import Jumbotron from "./Components/Jumbotron"



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