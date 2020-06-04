import React, { Component } from "react";
import { Button, Modal, Select, TextInput, Row, Textarea } from "react-materialize";
import search from "../../utils/API";

import "./style.css"
import axios from "axios";

const addRouteTrigger = <Button>Add Route</Button>;

class NewRouteModal extends Component {
    constructor() {
        super();
        this.state = {
            location1: '',
            location2: '',
            location3: ''
        }
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
		console.log("Changing! " + event.target.value);
		this.setState({
			[event.target.name]: event.target.value
		})
		console.log("Location 1: " + this.state.location1);
        console.log("Location 2: " + this.state.location2);
        console.log("Location 3: " + this.state.location3);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        var route = [];

		console.log('Locations handleSubmit');
		console.log("Location 1: " + this.state.location1);
        console.log("Location 2: " + this.state.location2);
        console.log("Location 3: " + this.state.location3);

        //request to server to add a new username/password
        if (this.state.location1 !== '') {
            search(this.state.location1)
                .then(response => {
                    console.log(response);
                    route.push(response.data.candidates[0]);
                });
        }
        if (this.state.location2 !== '') {
            search(this.state.location2)
                .then(response => {
                    console.log(response);
                    route.push(response.data.candidates[0]);
                });
        }
        if (this.state.location3 !== '') {
            search(this.state.location3)
                .then(response => {
                    console.log(response);
                    route.push(response.data.candidates[0]);
                });
        }

        console.log("New route: ");
        console.log(route);

        axios.post("/user/routes").then(response => {
            console.log(response.data);
            if (response.status === 200) {
                console.log("Routes array: ");
                console.log(this.props.routes);

                this.props.routes.push(route);
                
                console.log("Routes array with added route: ");
                console.log(this.props.routes);
            }
        })
	}

    render() {
        return (
            <Modal header="Add New Route" trigger={addRouteTrigger}>
                <div className="row">
                    <form className="col s12">
                        <TextInput
                            id="location-name"
                            type="text"
                            label="route name"
                            s={12}
                        />
    
                        <Textarea
                            id="Textarea-12"
                            s={12}
                            label="route description"
                        />
    
                        <Select
                            id="activity-select"
                            s={12}
                            multiple
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
                            value={['']}
                            >
                            <option
                                disabled
                                value=""
                            >
                                Pick Activity Categories
                            </option>
                            <option value="1">
                                Music
                            </option>
                            <option value="2">
                                Food/Drink
                            </option>
                            <option value="3">
                                Sports
                            </option>
                            <option value="4">
                                Comedy
                            </option>
                            <option value="5">
                                Movie
                            </option>
                        </Select>
    
                        { /* Location input goes here */ }

                        <TextInput
                            type="text"
                            name="location1"
                            label="first location"
                            value={this.state.location1}
                            onChange={this.handleChange}
                            s={12}
                        />

                        <TextInput
                            type="text"
                            name="location2"
                            label="second location"
                            value={this.state.location2}
                            onChange={this.handleChange}
                            s={12}
                        />
    
                        <TextInput
                            type="text"
                            name="location3"
                            label="third location"
                            value={this.state.location3}
                            onChange={this.handleChange}
                            s={12}
                        />
    
                        <Button>Add Another Location</Button>
                        <Button modal="close" onClick={this.handleSubmit}>Add Route</Button>
                    </form>
                </div>
            </Modal>
        );
    }
}

export default NewRouteModal;