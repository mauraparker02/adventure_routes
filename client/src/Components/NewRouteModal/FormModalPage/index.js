import React, { Component } from "react";
import { Button, TextInput, Textarea, Select } from "react-materialize";


class FormModalPage extends Component {
    state = {
        price_category: '',
        activities: []
    }

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
                    description: this.description.value,
                    activities: this.state.activities,
                    price_category: this.state.price_category,
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
    }

    changePriceState = ( { target: { value } } ) => {
        this.setState(
            () => (
                { price_category: value }
            )
        )
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
                            id="ROUTE-DESCRIPTION"
                            className='form-control'
                            s={12}
                            label="route description"
                            type='text'
                            ref={this.getDescription}
                        />

                        <Select
                            id="activity-select"
                            s={6}
                            // onChange={this.changeActivityState}
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
                            value={[]}
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

                <Button onClick={this.handleModalSubmit} waves="orange">Render Map</Button>
            </div>
        )
    }
}

export default FormModalPage;