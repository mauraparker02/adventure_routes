import React, { Component } from 'react';
import { Button } from "react-materialize";
import axios from 'axios';
import AdventureRouteNav from './Components/AdventureRouteNav';
import Jumbotron from './Components/Jumbotron';
import NewRouteModal from "./Components/NewRouteModal";
import FavRouteSection from "./Components/FavRouteSection";
import FavRouteCard from "./Components/FavRouteSection/FavRouteCard"
import './App.css';

class App extends Component {
  state = {
    loggedIn: false,
    username: null,
    user: {id: '', username: '', routes: ''},
    description: null,
    routes: []
  };

  componentDidMount() {
    this.getUser();
  }

  updateUser = userObject => {
    console.log("Update the user: ");
    console.log(userObject);
    this.setState(userObject);
    console.log("global state user");
    console.log(this.state);
    this.getUser();
  }

  getUser = () => {
    axios.get('/user').then(response => {
      console.log('Get user response: ');
      console.log(response.data);
      if (response.data.user) {
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

  addRoute = routeObject => {
    console.log("User object to route search:");
    console.log(this.state.user.id);
    const id = this.state.user.id;//"5edd39c830eb27ea82204d1e";
    axios.post('/user/routes/' + id, {
      routes: [routeObject]
    })
    .then(response => {
      this.setState({
        routes: this.state.routes.push(response.data.routes)
      })
    }).catch(err => console.log(err));
  }

  render() {
    // const addRouteTrigger = <Button waves='orange'>+</Button>;
    return (
      <div>
        <AdventureRouteNav updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
        <Jumbotron loggedIn={this.state.loggedIn} username={this.state.username} routes={this.state.routes} addRoute={this.addRoute}/>
        <FavRouteSection routes={this.state.routes}/>
      </div>
    );
  }
}

export default App;
