import React, { Component } from "react";
import { Modal, Button, TextInput, TextInputProps } from "react-materialize";
import axios from "axios";

const signUpTrigger = <a href="">Sign Up</a>;

class SignUpNav extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null

		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		console.log("Changing! " + event.target.value);
		this.setState({
			[event.target.name]: event.target.value
		})
		console.log("Username: " + this.state.username);
		console.log("Password: " + this.state.password);
	}
	handleSubmit(event) {
		event.preventDefault();
		console.log('sign-up handleSubmit, username: ');
		console.log(this.state.username);

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.props.history.push('/login');
					// this.setState({ //redirect to login page
					// 	redirectTo: ' /login'
					// })
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ');
				console.log(error);
			})
	}
    
    render() {
        return (
            <Modal header="Sign Up" trigger={signUpTrigger}>
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
                            <Button onClick={this.handleSubmit} modal="close">Sign Up</Button>
                        </div>
                    </form>
                </div>
            </Modal>
        );
    }
}

export default SignUpNav;