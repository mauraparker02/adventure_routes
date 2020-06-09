import React, { Component } from "react";
import { Row, Col, } from 'react-materialize';
import FavRouteCard from "./FavRouteCard";



function FavRouteSection(props) {
    return (
        <Row>
            <Col m={3} ></Col>
            <Col m={6} ></Col>
            {props.routes.map(route => <FavRouteCard username={props.username} route={route}/>)}
            <Col m={3} ></Col>
        </Row>
    )
}

export default FavRouteSection;