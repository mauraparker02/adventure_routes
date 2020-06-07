import React, { Component } from 'react';
import { Button } from "react-materialize";
import axios from 'axios';
import AdventureRouteNav from './Components/AdventureRouteNav';
import Jumbotron from './Components/Jumbotron';
import NewRouteModal from "./Components/NewRouteModal";
import FavRouteSection from "./Components/FavRouteSection";
import './App.css';

class App extends Component {
  state = {
    loggedIn: false,
    username: null,
    user: null,
    description: null,
    routes: []
  };

  componentDidMount() {
    this.getUser();
  }

  updateUser = userObject => {
    this.setState(userObject);
    this.getUser();
  }

  getUser = () => {
    axios.get('/user/').then(response => {
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
    console.log(this.state.user);
    const id = "5edc48b9f4b0419af274c9dc";
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
    const addRouteTrigger = <Button waves='orange'>Add Route</Button>;
    return (
      <div>
        <AdventureRouteNav updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
        <Jumbotron loggedIn={this.state.loggedIn} username={this.state.username}/>
        <NewRouteModal routes={this.state.routes} addRoute={this.addRoute} trigger={addRouteTrigger}/>
        <FavRouteSection></FavRouteSection>
      </div>
    );
  }
}

export default App;
