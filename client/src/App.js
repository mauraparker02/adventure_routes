import React, { Component } from 'react';
import { Button } from "react-materialize";
import axios from 'axios';
import AdventureRouteNav from './Components/AdventureRouteNav';
import Jumbotron from './Components/Jumbotron';
import NewRouteModal from "./Components/NewRouteModal";
import FavRouteCard from "./Components/FavRouteCard";
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

  updateUser = userObject => {
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

  addRoute = routeObject => {
    axios.post('/user/routes').then(() => {
      this.setState({
        routes: this.state.routes.push(routeObject)
      })
    }).catch(err => console.log(err));
  }

  render() {
    const addRouteTrigger = <Button waves='light' style={{
      backgroundColor: 'orange'
    }}>Add Route</Button>;
    return (
      <div>
        <AdventureRouteNav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Jumbotron loggedIn={this.state.loggedIn} username={this.state.username}/>
        <NewRouteModal routes={this.state.routes} addRoute={this.addRoute} trigger={addRouteTrigger}/>
        <FavRouteCard></FavRouteCard>
      </div>
    );
  }
}

export default App;
