import React, { Component } from "react";

import FavRouteCard from "./FavRouteCard";

function FavRouteSection(props) {
    return (
        <div>
            {props.routes.map(route => <FavRouteCard route={route}/>)}
        </div>
    )
}

export default FavRouteSection;