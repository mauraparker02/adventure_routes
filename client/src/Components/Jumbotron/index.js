import React from "react";
import { TextInput, Button } from "react-materialize";

import NewRouteModal from "../NewRouteModal";

import "./style.css";


function Jumbotron(props) {
  const addRouteTrigger = <Button waves='orange'>New Route</Button>;
  return (
    <div id="jumbotron">
      <div class="bigIcon">
        <img src="/icons/Adv.png"></img>
      </div>
      <h1 class="welcome">{props.loggedIn ? (props.username) : ("Welcome")}</h1>
      <h2 class="welcome">Search below to find your next adventure!</h2>
      
      <div class="row" id="search-route-group">
        <TextInput
          id="search-route"
          label="search route"
          s={6}
          m={8}
        />
        <NewRouteModal routes={props.routes} addRoute={props.addRoute} trigger={addRouteTrigger}/>
      </div>
    </div>
  );
}

export default Jumbotron;