import React, { Component } from "react";
import { Button, TextInput, Textarea, Select } from "react-materialize";


class FormModalPage extends Component {
    state = {
        description: '',
        price_category: '',
        activities: '',
        waypoint1: '',
        waypoint2: ''
    }

    handleModalSubmit = () => {
        if (this.origin.value !== '' &&
            this.state.waypoint1 !== '' &&
            this.state.waypoint2 !== '' &&
            this.destination.value !== '') {
                this.onClick();
                this.props.update({
                    modalPage: false,
                });
        }
        else {
            console.log("Not all locations added!");
        }
    }

    onClick = () => {
        if (this.origin.value !== '' &&
            this.state.waypoint1 !== '' &&
            this.state.waypoint2 !== '' &&
            this.destination.value !== '') {
            
            console.log(`Origin: ${this.origin.value}`);
            console.log(`Waypoint: ${this.state.waypoint1} ${this.state.waypoint2}`)
            console.log(`Destination: ${this.destination.value}`);

            this.props.update({
                origin: this.origin.value,
                waypoints: [
                    { location: this.state.waypoint1 },
                    { location: this.state.waypoint2 }
                ],
                destination: this.destination.value
            });

            this.props.addRoute(
                {
                    name: this.routeName.value,
                    description: this.state.description,
                    activities: this.state.activities,
                    price_category: this.state.price_category,
                    route: {
                        origin: this.origin.value,
                        waypoints: [ 
                            { location: this.state.waypoint1 },
                            { location: this.state.waypoint2 }
                        ],
                        destination: this.destination.value
                    }
                }
            );
        }
    }

    changeDescriptionState = ( { target: { value } } ) => {
        this.setState( { description: value } );
    }

    changePriceState = ( { target: { value } } ) => {
        this.setState( { price_category: value } );
    }

    getRouteName = ref => {
        this.routeName = ref;
    }

    getOrigin = ref => {
        console.log("Description: " + ref)
        this.origin = ref;
    }

    changeWaypoint1State = ( { target: { value } } ) => {
        this.setState( { waypoint1: value } );
    }

    changeWaypoint2State = ( { target: { value } } ) => {
        this.setState( { waypoint2: value } );
    }

    getWaypoint1 = ref => {
        this.waypoint1 = ref;
    }

    getWaypoint2 = ref => {
        this.waypoint2 = ref;
    }

    getDestination = ref => {
        this.destination = ref;
    }

    render() {
        return (
            <div>
                <h2>New Route</h2>
                <div className='row'>
                    <form className="col s12">
                        <TextInput
                            id='ROUTE-NAME'
                            className='form-control'
                            label="route name"
                            type='text'
                            s={12}
                            ref={this.getRouteName}
                        />

                        <Textarea
                            id="ROUTE-DESCRIPTION"
                            className='form-control'
                            s={12}
                            label="route description"
                            type='text'
                            onChange={this.changeDescriptionState}
                            value={this.state.description}
                        />

                        <Select
                            id="activity-select"
                            s={6}
                            onChange={this.changeActivityState}
                            multiple={false} options={{
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
                                Pick activity categories
                            </option>
                            <option value="Music">
                                Music
                            </option>
                            <option value="Food/Drink">
                                Food/Drink
                            </option>
                            <option value="Sports">
                                Sports
                            </option>
                            <option value="Comedy">
                                Comedy
                            </option>
                            <option value="Movie">
                                Movie
                            </option>
                        </Select>

                        <Select
                            id="activity-select"
                            s={6}
                            multiple={false}
                            onChange={this.changePriceState}
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
                            value='free'
                        >
                            <option value="free">Pick price category</option>
                            <option value="$" selected="false">$</option>
                            <option value="$$" selected="false">$$</option>
                            <option value="$$$" selected="false">$$$</option>
                            <option value="$$$$" selected="false">$$$$</option>
                        </Select>

                        <TextInput
                            id='ORIGIN'
                            className='form-control'
                            label="start"
                            type='text'
                            s={12}
                            ref={this.getOrigin}
                        />

                        <TextInput
                            id='WAYPOINT'
                            className='form-control'
                            label="stop"
                            type='text'
                            s={12}
                            onChange={this.changeWaypoint1State}
                            value={this.state.waypoint1}
                        />

                        <TextInput
                            id='WAYPOINT'
                            className='form-control'
                            label="stop"
                            type='text'
                            s={12}
                            onChange={this.changeWaypoint2State}
                            value={this.state.waypoint2}
                        />

                        <TextInput
                            id='DESTINATION'
                            className='form-control'
                            label="end"
                            type='text'
                            s={12}
                            ref={this.getDestination}
                        />
                    </form>
                </div>

                <Button onClick={this.handleModalSubmit} waves="orange">Render Map</Button>

                <p class="error"></p>
            </div>
        )
    }
}

export default FormModalPage;