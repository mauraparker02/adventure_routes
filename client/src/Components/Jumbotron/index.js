import React from "react";
import { TextInput } from "react-materialize";
import "./style.css";





function Jumbotron(props) {
  return (
    <div id="jumbotron">
      <div class="bigIcon">
        <img src="/icons/Adv.png"></img>
      </div>
      <h1 class="welcome">{props.loggedIn ? (props.username) : ("Welcome")}</h1>
      <h2 class="welcome">Search below to find your next adventure!</h2>
      
      <TextInput
        id="TextInput-4"
        label="search route"
        m={6}
      />
    </div>
  );
}

export default Jumbotron;