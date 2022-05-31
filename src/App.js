import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import FloorThree from "./components/floor3th";
import FloorFive from "./components/floor5th";
import FloorFour from "./components/floor4th";
import { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <FloorFour />
        </Route>
        <Switch>
          <Route exact path="/floor4">
            <FloorFour />
          </Route>
          <Route path="/floor3">
            <FloorThree />
          </Route>
          <Route path="/floor5">
            <FloorFive />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
