import React from 'react';
import {BrowserRouter as PageRouter, Route} from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <PageRouter>
      <div className="App">
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" component={Home}/>
      </div>  
    </PageRouter>
  );
}

export default App;