import React, { Component } from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import axios from "axios";

import SignUpNav from "./SignUpNav";
import SignInNav from "./SignInNav";

class AdventureRouteNav extends Component {
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

    const signUpTrigger = <NavItem>Sign Up</NavItem>;
    const signInTrigger = <NavItem>Sign In</NavItem>;

    return (
      <Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="#">Adventure Routes</a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        {loggedIn ?
          (<NavItem href="" onClick={this.logout}>Sign Out</NavItem>)
          :
          (<ul>
            <li>
              <SignUpNav
                trigger={signUpTrigger}
                updateUser={this.props.updateUser}
                loggedIn={this.props.loggedIn}
              />
            </li>
            <li>
              <SignInNav
                trigger={signInTrigger}
                updateUser={this.props.updateUser}
                loggedIn={this.props.loggedIn}
              />
            </li>
          </ul>)
        }
      </Navbar>
    );
  }
}

export default AdventureRouteNav;