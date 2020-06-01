import React, { Component } from "react";
import axios from "axios";

import SignUpNav from "./SignUpNav";
import SignInNav from "./SignInNav";

class Navbar extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);

    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Adventure Routes</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            { loggedIn ? (<li><a href="#" onClick={this.logout}>Sign Out</a></li>) : 
            (<div>
              <li><SignUpNav updateUser={this.props.updateUser} loggedIn={this.props.loggedIn}/></li>
              <li><SignInNav updateUser={this.props.updateUser} loggedIn={this.props.loggedIn}/></li>
            </div>) }
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;