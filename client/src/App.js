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
    routes: [],
    search: ''
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
  }

  getUser = () => {
    axios.get('/user').then(response => {
      console.log('Get user response: ');
      console.log(response.data);
      if (response.data.user || response.status=== 304) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          user: response.data.user,
          description: response.data.user.description,
          routes: response.data.user.routes,
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
      console.log(response);
      const temp = response.data.routes;
      temp.push(routeObject);

      if (response.status === 200) {
        console.log("Yayyyyyyy");
          this.setState({
            routes: temp,
            user: { id: this.state.user.id, username: this.state.user.username, routes: temp }
          });
      }
      else {
        console.log("Booooooo");
      }
      // const temp = this.state.routes;
      // this.setState({
      //   routes: temp
      // })
      // this.getUser();
    }).catch(err => console.log(err));
  }

  filterRoute = event => {
    console.log("Route input: " + event.target.value);
    console.log("Route list: ");
    console.log(this.state.user.routes);
    var filteredRoutes = this.state.user.routes.filter(route => 
      route.name.toLowerCase().includes(event.target.value)
    );
    console.log(filteredRoutes);
    this.setState({
      search: event.target.value,
      routes: filteredRoutes
    })
    console.log("Filtered route list: ");
    console.log(this.state.routes);
  }

  render() {
    // const addRouteTrigger = <Button waves='orange'>+</Button>;
    console.log("Route cards to render:");
    console.log(this.state.routes);
    return (
      <div>
        <AdventureRouteNav updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
        <Jumbotron
          loggedIn={this.state.loggedIn}
          username={this.state.username}
          routes={this.state.routes}
          search={this.state.search}
          addRoute={this.addRoute}
          filterRoute={this.filterRoute}
        />
        <div className="fav-routes-section"></div>
        <FavRouteSection routes={this.state.routes} username={this.state.username}/>
      </div>
    );
  }
}

export default App;
