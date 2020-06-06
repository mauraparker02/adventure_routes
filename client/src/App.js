import React, { Component } from 'react';
import { Button } from "react-materialize";
import axios from 'axios';

import AdventureRouteNav from './Components/AdventureRouteNav';
import Jumbotron from './Components/Jumbotron';
import NewRouteModal from "./Components/NewRouteModal";

import './App.css';

class App extends Component {
  state = {
    loggedIn: false,
    username: null,
    user: null,
    description: "",
    routes: [],

  };

  componentDidMount() {
    this.getUser();
  }

  updateUser = (userObject) => {
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

  //where does this now go within App.js? 

  render() {
    const addRouteTrigger = <Button waves='light' style={{
      backgroundColor: 'orange'
    }}>Add Route</Button>;
    return (
      <div>
        <AdventureRouteNav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Jumbotron />
        <NewRouteModal routes={this.state.routes} trigger={addRouteTrigger}/>
      </div>
    );
  }
}

export default App;
