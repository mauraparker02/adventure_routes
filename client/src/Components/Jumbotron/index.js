import React from "react";
import { TextInput, Button, Row, Col } from "react-materialize";

import NewRouteModal from "../NewRouteModal"

import "./style.css";

function Jumbotron(props) {
  const addRouteTrigger = <Button style={ {margin: '0'}} waves='orange'>+</Button>;
  return (
    <div id="jumbotron">
      <Row>
        <Col m={2} s={12}></Col>
        <Col m={8} s={12}>
          <div className="bigIcon">
              <img src="/icons/Adv.png" alt="adventure-route-cover-img"></img>
          </div>
        </Col>
        <Col m={2} s={12}></Col>
      </Row>
      <Row>
        <Col m={2} s={12}></Col>
        <Col m={8} s={12}>
          <h1 className="welcome">{props.loggedIn ? props.username : "Welcome"}</h1>
          <h2 className="welcome">Search below to find your next adventure!</h2>
        </Col>
        <Col m={2} s={12}></Col>
      </Row>
      <Row>
        {/* <Col m={2} s={12}></Col>
        <Col m={8} s={12}> */}
          <div className="flexbox">
          <TextInput
            label="search route"
            style={ {margin: '0'}}
            m={8}
            value={props.search}
            onChange={props.filterRoute}
          />
          <Button className="button btnfav" waves="orange"><i><img src="/icons/heart_icon.png" alt="like" height="15px" width="auto"/></i></Button>
          <NewRouteModal routes={props.routes} addRoute={props.addRoute} trigger={addRouteTrigger}/>
          </div>
        {/* </Col>
        <Col m={2} s={12}></Col> */}
      </Row>
    </div>
  );
}

export default Jumbotron;
