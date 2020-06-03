import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, } from "react-google-maps";
import * as TestData from '../../data_test/crisp'; //eventually this data will actually come from an axios call


// console.log(TestData)
// const WrappedMap = withScriptjs(withGoogleMap(Map));

// function Map(props) {
//   // const [selectedRestaurant, setSelectedRestaurant]= useState(null);
//   // console.log(selectedRestaurant)
//   return (
//     <div>
//     <GoogleMap
//       defaultZoom={15}
//       defaultCenter={{ lat: 41.9361111, lng: -87.6444389 }}
//     >
//       {TestData.map((place, i) => (
//         <Marker
//           key={place.candidates[0].name + i}
//           position={{
//             lat: place.candidates[0].geometry.location.lat,
//             lng: place.candidates[0].geometry.location.lng
//           }}
//           // onClick={() => {
//           //   setSelectedRestaurant(place.candidates[0])
//           // }}
//         />
//       )
//       )}
//     </GoogleMap>
  
//     <div style={{ width: "70vw", height: "100vh" }}>
      
//       <WrappedMap
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCZGl5xRRXsZcx3O3C4-YyfYT9jZVP5AVw`}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `100%` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     </div>
//     </div>
//   );
// }


// export default Map;

//somehow inside of wrapped maps it'll have to be able to link to the modal? 



// console.log(TestData)
// function Map(){
//   const [selectedRestaurant, setSelectedRestaurant]= useState(null);
//   console.log(selectedRestaurant)
//   return (
//     <GoogleMap
//       defaultZoom= {15}
//       defaultCenter= {{lat: 41.9361111, lng: -87.6444389}}
//       >
//         {TestData.map((place, i )=> (
//             <Marker 
//               key={place.candidates[0].name + i}
//               position={{lat: place.candidates[0].geometry.location.lat,
//               lng: place.candidates[0].geometry.location.lng}}
//               onClick={() => {
//                 setSelectedRestaurant(place.candidates[0])
//               }}
//             />
//           )
//   )}
//     </GoogleMap>
//   )
// }

// const WrappedMap= withScriptjs(withGoogleMap(Map));

// export default function App() {
//   return (
//     // <div className="App">
//     //   <Login></Login>
//     // </div>
//     <div style={{width: "70vw", height: "100vh" }}>
//     <WrappedMap
//       googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCZGl5xRRXsZcx3O3C4-YyfYT9jZVP5AVw`}
//       loadingElement={<div style={{ height: `100%` }} />}
//       containerElement={<div style={{ height: `100%` }} />}
//       mapElement={<div style={{ height: `100%` }} />}
//     />
//   </div>
// );
// }


