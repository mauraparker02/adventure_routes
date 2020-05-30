import React from "react";

import StartNowNav from "./StartNowNav";

function Navbar() {
  return (
<nav>
<div class="nav-wrapper">
  <a href="#" class="brand-logo">Adventure Routes</a>
  <ul id="nav-mobile" class="right hide-on-med-and-down">
    
    <StartNowNav/>
  </ul>
</div>
</nav>
  )
}

export default Navbar;