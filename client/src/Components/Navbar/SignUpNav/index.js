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
			description: '',
			routes: [],
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
		console.log("Username: " + this.state.username);
		console.log("Description: " + this.state.description);

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password,
			description: this.state.description,
			routes: this.state.routes
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
                            <Button onClick={this.handleSubmit} modal="close">Sign Up</Button>
                        </div>
                    </form>
                </div>
            </Modal>
        );
    }
}

export default SignUpNav;