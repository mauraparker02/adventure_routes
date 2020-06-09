import React, { Component } from 'react';
import axios from 'axios';

import AdventureRouteNav from './Components/AdventureRouteNav';
import Jumbotron from './Components/Jumbotron';
import FavRouteSection from "./Components/FavRouteSection";

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
    this.setState(userObject);
  }

  getUser = () => {
    axios.get('/user').then(response => {
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
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  addRoute = routeObject => {
    const id = this.state.user.id;//"5edd39c830eb27ea82204d1e";
    axios.post('/user/routes/' + id, {
      routes: [routeObject]
    })
    .then(response => {
      const temp = response.data.routes;
      temp.push(routeObject);

      if (response.status === 200) {
          this.setState({
            routes: temp,
            user: { id: this.state.user.id, username: this.state.user.username, routes: temp }
          });
      }
      // const temp = this.state.routes;
      // this.setState({
      //   routes: temp
      // })
      // this.getUser();
    }).catch(err => console.log(err));
  }

  filterRoute = event => {
    var filteredRoutes = this.state.user.routes.filter(route => 
      route.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({
      search: event.target.value,
      routes: filteredRoutes
    })
  }

  render() {
    // const addRouteTrigger = <Button waves='orange'>+</Button>;
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
