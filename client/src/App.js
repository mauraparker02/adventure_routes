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

