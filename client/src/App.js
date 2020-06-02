import React, { useState } from 'react';
// import Login from './pages/Login';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
// import './App.css';
import * as crispData from './data_test/crisp.js';

console.log(crispData)
function Map(){
  const [selectedRestaurant, setSelectedRestaurant]= useState(null);
  console.log(selectedRestaurant)
  return (
    <GoogleMap
      defaultZoom= {15}
      defaultCenter= {{lat: 41.9361111, lng: -87.6444389}}
      >
        {crispData.map((crisp, i )=> (
            <Marker 
              key={crisp.candidates[0].name + i}
              position={{lat: crisp.candidates[0].geometry.location.lat,
              lng: crisp.candidates[0].geometry.location.lng}}
              onClick={() => {
                setSelectedRestaurant(crisp.candidates[0])
              }}
            />

          )
  )}
    </GoogleMap>
  )
}

const WrappedMap= withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    // <div className="App">
    //   <Login></Login>
    // </div>
    <div style={{width: "70vw", height: "100vh" }}>
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCZGl5xRRXsZcx3O3C4-YyfYT9jZVP5AVw`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
);
}

=======
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
