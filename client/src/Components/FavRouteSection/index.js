import React, { Component } from "react";
import { Row, Col, } from 'react-materialize';
import FavRouteCard from "./FavRouteCard";
import './style.css' 



function FavRouteSection(props) {
    return (
        <div>
            {props.routes.map(route =>
                <Row>
                    <div>
                        <Col m={3} />
                        <Col m={6}><FavRouteCard username={props.username} route={route} /></Col>
                        <Col m={3} />
                    </div>
                </Row>
            )}
        </div>
    )
}

export default FavRouteSection;