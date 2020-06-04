
import React, { useState, Component} from 'react';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import axios from 'axios'; 
import { GoogleMap, withScriptjs, withGoogleMap, Marker, } from "react-google-maps";
import * as TestData from './data_test/crisp'; //eventually this data will actually come from an axios call
import MapWithADirectionsRenderer from './Components/Directions'
import { Modal, Button } from 'react-materialize';
import NewRouteModal from "./Components/NewRouteModal";
import './App.css';

// import './App.css';
console.log(TestData)


function Map (props) {
  // state={

  // }

  //logic goes here
  // render(){
  console.log(props.test)

  return (
    <GoogleMap
      defaultZoom= {15}
      defaultCenter= {{lat:props.lat, lng:props.lng}}
      >
        {TestData.map((place, i )=> (
            <Marker 
              key={place.candidates[0].name + i}
              position={{lat: place.candidates[0].geometry.location.lat,
              lng: place.candidates[0].geometry.location.lng}}
              // onClick={() => {
              //   setSelectedRestaurant(place.candidates[0])
              // }}
            />
          )
  )}
    </GoogleMap>
  )
              }
// }
class App extends Component {
  state = {
    loggedIn: false,
    username: null,
    user: null,
    lat: 41.9361111,
    lng: -87.6444389,
    description: "",
    routes: [],

  };
  // constructor() {
  //   super();
  //   this.state = {
  //     loggedIn: false,
  //     username: null,
  //     user: null
  //   }

  //   this.getUser = this.getUser.bind(this);
  //   this.componentDidMount = this.componentDidMount.bind(this);
  //   this.updateUser = this.updateUser.bind(this);


  componentDidMount() {
    this.getUser();
  }
//   Map= ()=>{
//   // const [selectedRestaurant, setSelectedRestaurant]= useState(null);
//   // console.log(selectedRestaurant)
  
// }
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

// Map Function
//onclick event to render it 




//where does this now go within App.js? 
  addRoute = (route) => {
    this.setState()
  }

  render() {
    const WrappedMap= withScriptjs(withGoogleMap(Map))
    return (
      <div>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
        <Jumbotron />
        {this.state.loggedIn && <p>Hello, {this.state.username}!</p>}
        <div style={{width: "70vw", height: "100vh" }}>
    <Modal header="Map Header" trigger={}>
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCZGl5xRRXsZcx3O3C4-YyfYT9jZVP5AVw`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      lat={this.state.lat}
      lng={this.state.lng}
    />
    </Modal>
    {/* <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCZGl5xRRXsZcx3O3C4-YyfYT9jZVP5AVw`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      lat={this.state.lat}
      lng={this.state.lng}
    /> */}
    {/* <MapWithADirectionsRenderer></MapWithADirectionsRenderer> */}
  </div>
  <NewRouteModal routes={this.state.routes}/>
      </div> 
    );
  }
}

export default App;
