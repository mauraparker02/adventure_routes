import React from "react";
import { Modal, Button } from 'react-materialize';

const trigger = <li><a href="#">Start Now!</a></li>;

export default () => (
  <Modal header="Start Now!" trigger={trigger}>
    <div class="row">
      <form class="col s12">
        <div class="row">
        <div class="input-field col s12">
            <input id="username" type="text" class="validate"/>
            <label for="username">Username</label>
          </div>
          <div class="input-field col s12">
            <input id="password" type="password" class="validate"/>
            <label for="password">Password</label>
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <Button>Sign Up</Button>
      <Button>Sign In</Button>
    </div>
  </Modal>
);