import React, { Component } from "react";
import { Modal, Button, TextInput, TextInputProps } from "react-materialize";
import axios from "axios";

const signInTrigger = <a href="#">Sign In</a>;

class SignInNav extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        console.log("Changing!" + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log("Username: " + this.state.username);
        console.log("Password: " + this.state.password);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit');

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                console.log(response.status);
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        return (
            <Modal header="Sign In" trigger={signInTrigger}>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <TextInput
                                    id="username"
                                    type="text"
                                    name="username"
                                    className="validate"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="input-field col s12">
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="validate"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <Button onClick={this.handleSubmit} modal="close">Sign In</Button>
                        </div>
                    </form>
                </div>
            </Modal>
        );
    }
}

export default SignInNav;