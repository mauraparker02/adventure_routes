import React from 'react';
import { Row, Col, Modal } from 'react-materialize';

import Map from "../../Map";

import './style.css'


//PortCard standing for Portfolio Cards 

function FavRouteCard(props) {
  const routeCardTrigger = (
    <a href="#">
      <Col
        m={6}
        s={12}
      >
        <div className="card">
          <div className="card-action">
            <img src="/icons/empty_user.png" height="35px" width="auto" />
            <a href="#">{props.username}</a>
          </div>
          <div className="image-wrapper">
            <div className="card-image">
              <img src="/testimgs/stock_image.jpg" />
            </div>
          </div>
          <div className="card-content">
            <span className="card-title">{props.route.name}</span>
            <p>{props.route.description}</p>
          </div>
          <div className="card-action">
            {/* <button type="submit"><img src="/icons/heart_icon.png" alt="like" height="15px" width="auto"/></button> */}
            <a class="btn-floating  waves-effect waves-red white"><i class="material-icons"><img src="/icons/heart_icon.png" alt="like" height="15px" width="auto" /></i></a>
            <a class="btn-floating  waves-effect waves-red white"><i class="material-icons">{props.route.price_category}</i></a>
            <p>{props.route.price_category}</p>
          </div>
        </div>
      </Col>
    </a>
  );

  return (
    <Row>
      <Modal trigger={routeCardTrigger}>
        <h2>Map</h2>
        <Map
          origin={props.route.route.origin}
          waypoints={props.route.route.waypoints}
          destination={props.route.route.destination}
        />
      </Modal>
    </Row>
  );
}

export default FavRouteCard; 