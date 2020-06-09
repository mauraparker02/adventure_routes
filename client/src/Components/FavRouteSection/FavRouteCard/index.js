import React from "react";
import { Modal } from "react-materialize";

import Map from "../../Map";

import "./style.css";

//PortCard standing for Portfolio Cards

function FavRouteCard(props) {
  const routeCardTrigger = (
    <div className="card-body">
      <a href="#">
        <div className="card">
          <div className="card-action">
            <div className="card-content">
              <img src="/icons/empty_user.png" alt="user-icon" height="35px" width="auto" />
              <div className="username">
                <a href="#">{props.username}</a>
              </div>
            </div>
          </div>
          <div className="image-wrapper">
            <div className="card-image">
              <img src="/testimgs/stock_image.jpg" alt="stock-img"/>
            </div>
          </div>
          <div className="card-content">
            <span className="card-title">{props.route.name}</span>
            <b>{props.route.price_category}</b>
            <p>{props.route.description}</p>
          </div>
          <div className="card-action">
            {/* <button type="submit"><img src="/icons/heart_icon.png" alt="like" height="15px" width="auto"/></button> */}
            <div className="card-content">
              <a class="btn-floating  waves-effect waves-red white">
                <i class="material-icons">
                  <img
                    src="/icons/heart_icon.png"
                    alt="like"
                    height="15px"
                    width="auto"
                  />
                </i>
              </a>
            </div>
          </div>
        </div>
      </a>
    </div >
  );

  return (
      <Modal trigger={routeCardTrigger}>
        <h2>Map</h2>
        <Map
          origin={props.route.route.origin}
          waypoints={props.route.route.waypoints}
          destination={props.route.route.destination}
        />
      </Modal>
  );
}

export default FavRouteCard;
