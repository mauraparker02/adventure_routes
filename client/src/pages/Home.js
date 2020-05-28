import React from "react";

function Navbar(props) {
    return (
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">Adventure Routes</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="#">Routes</a></li>
            <li><a href="#">Favorites</a></li>
            <li><a href="#">New Route</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;