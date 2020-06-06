import React, { Component } from "react";
import { Button, TextInput, Textarea, Select } from "react-materialize";


class FormModalPage extends Component {
    handleModalSubmit = () => {
        this.props.update({
            modalPage: false,
        });
        this.onClick();
    }

    onClick = () => {
        if (this.origin.value !== '' && this.destination.value !== '') {
            this.props.update({
                origin: this.origin.value,
                destination: this.destination.value
            });
        }
    }

    getOrigin = ref => {
        this.origin = ref;
    }

    getMidpoint = ref => {
        this.midpoint = ref;
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
                        />

                        <Textarea
                            id="Textarea-12"
                            s={12}
                            label="route description"
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
                            label="origin"
                            type='text'
                            s={12}
                            ref={this.getOrigin}
                        />

                        <TextInput
                            id='DESTINATION'
                            className='form-control'
                            label="destination"
                            type='text'
                            s={12}
                            ref={this.getDestination}
                        />
                    </form>
                </div>

                <Button onClick={this.handleModalSubmit}>Render Map</Button>
            </div>
        )
    }
}

export default FormModalPage;