import React, { Component } from "react";
import { Button } from "react-materialize";

import Map from "../../Map";

class MapModalPage extends Component {
    handleModalSubmit = () => {
        this.props.update({
            modalPage: true,
        });
    }
    render() {
        return (
            <div>
                <h2>Map</h2>
                <Map
                    origin={this.props.origin}
                    waypoints={this.props.waypoints}
                    destination={this.props.destination}
                />
                <Button onClick={this.handleModalSubmit} waves="#orange">Back to Form</Button>
            </div>
        );
    }
}

export default MapModalPage;