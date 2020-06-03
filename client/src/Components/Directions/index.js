import React from 'react'; 
import { compose, withProps, lifecycle } from "recompose";
import { GoogleMap, withScriptjs, withGoogleMap, DirectionsRenderer} from "react-google-maps";


const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCZGl5xRRXsZcx3O3C4-YyfYT9jZVP5AVw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();
      DirectionsService.route({
        origin: new window.google.maps.LatLng(41.8507300, -87.6512600),
        destination: new window.google.maps.LatLng(41.8525800, -87.6514100),
        travelMode: window.google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new window.google.maps.LatLng(41.8507300, -87.6512600)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
        )

export default MapWithADirectionsRenderer; 


//conditionally render two different things 