import React from "react";
import { TextInput } from "react-materialize";

function Jumbotron(props) {
  return (
    <div>
      <h1>{props.loggedIn ? (props.username) : ("Welcome")}</h1>
      <TextInput
        id="TextInput-4"
        label="search route"
        m={6}
      />
    </div>
  );
}

export default Jumbotron;