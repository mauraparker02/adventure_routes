import React, { useState, Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import { Button } from "react-materialize";
import axios from "axios";

import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import NewRouteModal from "./Components/NewRouteModal";

import './App.css';
import * as crispData from './data_test/crisp.js';

class App extends Component {
  state = {
    loggedIn: false,
    username: null,
    description: "",
    routes: [],
    user: null
  };
  // constructor() {
  //   super();
  //   this.state = {
  //     loggedIn: false,
  //     username: null,
  //     user: null
  //   }

    //this.getUser = this.getUser.bind(this);
    //this.componentDidMount = this.componentDidMount.bind(this);
    //this.updateUser = this.updateUser.bind(this);


  componentDidMount() {
    this.getUser();
  }

  updateUser = (userObject) =>{
    this.setState(userObject);
  }

  getUser = () => {
    axios.get('/user/').then(response => {
      console.log('Get user response: ');
      console.log(response.data);
      if (response.data.user) {
        console.log(response.data.user);
        console.log('Get User: There is a user saved in the server session: ');

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          user: response.data.user,
          description: response.data.user.description,
          routes: response.data.user.routes
        });
      }
      else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  addRoute = (route) => {
    this.setState()
  }

  render() {
    return (
      <div>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
        <Jumbotron />
        {this.state.loggedIn && <p>Hello, {this.state.username}!</p>}
        <NewRouteModal routes={this.state.routes}/>
      </div>
    );
  }
}

export default App;
