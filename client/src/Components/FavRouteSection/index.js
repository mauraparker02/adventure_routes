import React, { Component } from "react";

import FavRouteCard from "./FavRouteCard";



function FavRouteSection(props) {
    return (
        <div>
            {props.routes.map(route => <FavRouteCard username={props.username} route={route}/>)}
        </div>
    )
}

export default FavRouteSection;