import React from "react";
import { Row, Col } from "react-materialize";

import FavRouteCard from "./FavRouteCard";



function FavRouteSection(props) {
    return (
        <div>
            {props.routes.map(route => <FavRouteCard username={props.username} route={route}/>)}
        </div>
    )
}

export default FavRouteSection;