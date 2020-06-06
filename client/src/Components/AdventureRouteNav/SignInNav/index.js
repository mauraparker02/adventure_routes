import React, { Component } from "react";
import { Modal, Button, TextInput } from "react-materialize";
import axios from "axios";

class SignInNav extends Component {
    state = {
        username: '',
        password: '',
        redirectTo: null
    }

    handleChange = event => {
        console.log("Changing!" + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log("Username: " + this.state.username);
        console.log("Password: " + this.state.password);
    }

    handleSubmit = event => {
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
        const signInTrigger = this.props.trigger;
        return (
            <Modal header="Sign In" trigger={signInTrigger}>
                <div className="row">
                    <form className="col s12">
                        <TextInput
                            s={12}
                            label="username"
                            type="text"
                            name="username"
                            className="validate"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <TextInput
                            s={12}
                            label="password"
                            type="password"
                            name="password"
                            className="validate"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
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