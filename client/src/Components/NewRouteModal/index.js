import React, { Component } from "react";
import { Modal } from "react-materialize";

import FormModalPage from "./FormModalPage";
import MapModalPage from "./MapModalPage";

import "./style.css"

class NewRouteModal extends Component {
    state = {
        modalPage: true,
        origin: '',
        waypoints: [],
        destination: ''
    }

    update = change => {
        this.setState(change);
    };

    render() {
        return (
            <Modal trigger={this.props.trigger}>
                {this.state.modalPage ? (
                    <FormModalPage
                        update={this.update}
                        addRoute={this.props.addRoute}
                    />
                ) : (
                    <MapModalPage
                        update={this.update}
                        modalstate={this.state.modalPage}
                        origin={this.state.origin}
                        waypoints={this.state.waypoints}
                        destination={this.state.destination}
                    />
                )}
            </Modal>
        );
    }
}

export default NewRouteModal;