import React, { Component } from 'react';
import axios from "axios";

import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";

import './App.css';

class App extends Component {
  state = {
    loggedIn: false,
    username: null,
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
          user: response.data.user
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

  render() {
    return (
      <div>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
        <Jumbotron />
        {this.state.loggedIn && <p>Hello, {this.state.username}!</p>}
      </div>
    );
  }
}

export default App;