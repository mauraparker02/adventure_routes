import React from 'react';
import { Row, Col, } from 'react-materialize';
import './style.css'


//PortCard standing for Portfolio Cards 

function FavRouteCard (props){
  return (
    <Row>
  <Col
    m={6}
    s={12}
  >
      <div className="card">
      <div className="card-action">
      <img src="/icons/empty_user.png" height="35px" width="auto"/>
      <a href="#">User Name</a>
        </div>
     
        <div className="image-wrapper">
        <div className="card-image">
          <img src="/testimgs/RouteCardPic.jpg"/>
        </div>
        </div>
        <div className="card-content">
        <span className="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <button type="submit"><img src="/icons/heart_icon.png" alt="like" height="15px" width="auto"/></button>
        </div>
      </div>
      </Col>
      </Row>
  );
} 

export default FavRouteCard; 