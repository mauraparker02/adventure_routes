import React, { Component } from "react";
import { Button, TextInput, Textarea, Select } from "react-materialize";


class FormModalPage extends Component {
    state = {
        description: '',
        price_category: '',
        activities: '',
        origin: '',
        waypoint1: '',
        waypoint2: '',
        destination: ''
    }

    handleModalSubmit = () => {
        if (this.state.origin !== '' &&
            this.state.waypoint1 !== '' &&
            this.state.waypoint2 !== '' &&
            this.state.destination !== '') {

            this.props.update({
                origin: this.state.origin,
                waypoints: [
                    { location: this.state.waypoint1 },
                    { location: this.state.waypoint2 }
                ],
                destination: this.state.destination,
                modalPage: false
            });

            this.props.addRoute({
                name: this.routeName.value,
                description: this.state.description,
                activities: this.state.activities,
                price_category: this.state.price_category,
                route: {
                    origin: this.state.origin,
                    waypoints: [
                        { location: this.state.waypoint1 },
                        { location: this.state.waypoint2 }
                    ],
                    destination: this.state.destination
                }
            });
        }
        
        else {
            console.log("Not all locations added!");
        }
    }

    changeDescriptionState = ({ target: { value } }) => {
        this.setState({ description: value });
    }

    changePriceState = ({ target: { value } }) => {
        this.setState({ price_category: value });
    }

    changeOriginState = ({ target: { value } }) => {
        this.setState({ origin: value });
    }

    changeDestinationState = ({ target: { value } }) => {
        this.setState({ destination: value });
    }

    getRouteName = ref => {
        this.routeName = ref;
    }

    changeWaypoint1State = ({ target: { value } }) => {
        this.setState({ waypoint1: value });
    }

    changeWaypoint2State = ({ target: { value } }) => {
        this.setState({ waypoint2: value });
    }

    render() {
        return (
            <div>
                <h2>New Route</h2>
                <div className='row'>
                    <form className="col s12">
                        <TextInput
                            className='form-control'
                            label="route name"
                            type='text'
                            s={12}
                            ref={this.getRouteName}
                        />

                        <Textarea
                            className='form-control'
                            s={12}
                            label="route description"
                            type='text'
                            onChange={this.changeDescriptionState}
                            value={this.state.description}
                        />

                        <Select
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
                            value=''
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
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                            <option value="$$$$">$$$$</option>
                        </Select>

                        <TextInput
                            className='form-control'
                            label="start"
                            type='text'
                            s={12}
                            onChange={this.changeOriginState}
                            value={this.state.origin}
                        />

                        <TextInput
                            className='form-control'
                            label="stop"
                            type='text'
                            s={12}
                            onChange={this.changeWaypoint1State}
                            value={this.state.waypoint1}
                        />

                        <TextInput
                            className='form-control'
                            label="stop"
                            type='text'
                            s={12}
                            onChange={this.changeWaypoint2State}
                            value={this.state.waypoint2}
                        />

                        <TextInput
                            className='form-control'
                            label="end"
                            type='text'
                            s={12}
                            onChange={this.changeDestinationState}
                            value={this.state.destination}
                        />
                    </form>
                </div>

                <Button onClick={this.handleModalSubmit} waves="orange">Render Map</Button>

                <p className="error"></p>
            </div>
        )
    }
}

export default FormModalPage;