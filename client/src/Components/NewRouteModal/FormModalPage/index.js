import React, { Component } from "react";
import { Button, TextInput, Textarea, Select } from "react-materialize";


class FormModalPage extends Component {
    handleModalSubmit = () => {
        this.onClick();
        this.props.update({
            modalPage: false,
        });
    }

    onClick = () => {
        if (this.origin.value !== '' &&
            this.origin.waypoints !== [] &&
            this.destination.value !== '') {
            
            console.log(`Origin: ${this.origin.value}`);
            console.log(`Waypoint: ${this.waypoint1.value} ${this.waypoint2.value}`)
            console.log(`Destination: ${this.destination.value}`);

            this.props.update({
                origin: this.origin.value,
                waypoints: [
                    { location: this.waypoint1.value },
                    { location: this.waypoint2.value }
                ],
                destination: this.destination.value
            });

            this.props.addRoute(
                {
                    name: this.routeName.value,
                    description: "",
                    activities: "",
                    price_category: "",
                    route: {
                        origin: this.origin.value,
                        waypoints: [ 
                            { location: this.waypoint1.value },
                            { location: this.waypoint2.value }
                        ],
                        destination: this.destination.value
                    }
                }
            );
        }

        var routeObject = { }
    }

    getRouteName = ref => {
        this.routeName = ref;
    }

    getDescription = ref => {
        this.description = ref;
    }

    getOrigin = ref => {
        this.origin = ref;
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
                            id="Textarea-12"
                            s={12}
                            label="route description"
                            type='text'
                            ref={this.getDescription}
                        />

                        <Select
                            id="activity-select"
                            s={6}
                            multiple options={{
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

                        <Select
                            id="activity-select"
                            s={6}
                            multiple={false}
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
                                Pick price category
                            </option>
                            <option value="1">
                                $
                            </option>
                            <option value="2">
                                $$
                            </option>
                            <option value="3">
                                $$$
                            </option>
                            <option value="4">
                                $$$$
                            </option>
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
                            ref={this.getWaypoint1}
                        />

                        <TextInput
                            id='WAYPOINT'
                            className='form-control'
                            label="stop"
                            type='text'
                            s={12}
                            ref={this.getWaypoint2}
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

                <Button onClick={this.handleModalSubmit} waves="#orange">Render Map</Button>
            </div>
        )
    }
}

export default FormModalPage;