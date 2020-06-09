import React, { Component } from "react";
import { Modal, Button, TextInput } from "react-materialize";
import axios from "axios";

class SignUpNav extends Component {
	state = {
		username: '',
		password: '',
		description: '',
		routes: [],
		confirmPassword: '',
		redirectTo: null
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit = event => {
		event.preventDefault();

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password,
			description: this.state.description,
			routes: this.state.routes
		})
			.then(response => {
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.props.history.push('/login');
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ');
				console.log(error);
			})
	}
    
    render() {
		const signUpTrigger = this.props.trigger;
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