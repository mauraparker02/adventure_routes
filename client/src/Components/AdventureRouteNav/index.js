import React, { Component } from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import axios from "axios";
import SignUpNav from "./SignUpNav";
import SignInNav from "./SignInNav";
import "./style.css"


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
        brand={<div className="logo-wrap" href=""><a><img className="brand-logo"  alt="" src="/icons/small_logo.png" width="auto" height="60px"/></a></div>}
        id="mobile-nav"
        menuIcon={<Icon><div className="burger" href=""><img className="brand-logo" alt="" src="/icons/hamburger.png" width="auto" height="25px"/></div></Icon>}
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