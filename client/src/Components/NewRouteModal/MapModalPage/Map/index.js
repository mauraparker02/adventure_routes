import React, { Component } from 'react';
import { Select } from "react-materialize";
import { GoogleMap, DirectionsRenderer, DirectionsService, LoadScript } from "@react-google-maps/api";

class Map extends Component {
    state = {
        response: null,
        travelMode: 'DRIVING',
    }

    directionsCallback = response => {
        console.log(response);

        if (response !== null) {
            if (response.status === 'OK') {
                this.setState(
                    () => ({
                        response
                    })
                )
            } else {
                console.log('response: ', response);
            }
        }
    }

    changeTransportationState = ({ target: { value } }) => {
        this.setState(
            () => (
                { travelMode: value }
            )
        );
    }

    onMapClick = (...args) => console.log('onClick args: ', args);

    render() {
        return (
            <LoadScript
                googleMapsApiKey="AIzaSyCZGl5xRRXsZcx3O3C4-YyfYT9jZVP5AVw"
            >
                <div className='map'>
                    <div className='map-settings'>
                        <Select
                            id="Select-9"
                            multiple={false}
                            label="select transportation"
                            onChange={this.changeTransportationState}
                            options={{
                                classes: '',
                                dropdownOptions: {
                                    alignment: 'left',
                                    autoTrigger: true,
                                    closeOnClick: true,
                                    constrainWidth: true,
                                    coverTrigger: true,
                                    hover: false,
                                    inDuration: 150,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 250
                                }
                            }}
                            value="DRIVING"
                            s={12}
                        >
                            <option value="DRIVING">Driving</option>
                            <option value="BICYCLING">Bicycling</option>
                            <option value="TRANSIT">Transit</option>
                            <option value="WALKING">Walking</option>
                        </Select>
                    </div>

                    <div className='map-container'>
                        <GoogleMap
                            // required
                            id='direction-example'
                            // required
                            mapContainerStyle={{
                                height: '400px',
                                width: '100%'
                            }}
                            // required
                            zoom={2}
                            // required
                            center={{
                                lat: 42,
                                lng: -88
                            }}
                            // optional
                            onClick={this.onMapClick}
                            // optional
                            onLoad={map => {
                                console.log('DirectionsRenderer onLoad map: ', map)
                            }}
                            // optional
                            onUnmount={map => {
                                console.log('DirectionsRenderer onUnmount map: ', map)
                            }} 
                        >
                            {
                                (
                                    this.props.destination !== '' &&
                                    this.props.origin !== ''
                                ) && (
                                    <DirectionsService
                                        // required
                                        options={{
                                            origin: this.props.origin,
                                            destination: this.props.destination,
                                            travelMode: this.state.travelMode
                                        }}
                                        // required
                                        callback={this.directionsCallback}
                                        // optional
                                        onLoad={directionsService => {
                                            console.log('DirectionsService onLoad directionsService: ', directionsService)
                                        }}
                                        // optional
                                        onUnmount={directionsService => {
                                            console.log('DirectionsService onUnmount directionsService: ', directionsService)
                                        }}
                                    />
                                )
                            }

                            {
                                this.state.response !== null && (
                                    <DirectionsRenderer
                                        // required
                                        options={{
                                            directions: this.state.response
                                        }}
                                        // optional
                                        onLoad={directionsRenderer => {
                                            console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                                        }}
                                        // optional
                                        onUnmount={directionsRenderer => {
                                            console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                                        }}
                                    />
                                )
                            }
                        </GoogleMap>
                    </div>
                </div>
            </LoadScript>
        )
    }
}

export default Map;