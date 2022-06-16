import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import FloorThree from "./components/floor3th";
import FloorFive from "./components/floor5th";
import FloorFour from "./components/floor4th";
import Home from "./components/home";
import ManageUsers from "./components/manageUsers";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <Home />
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
          <Route path="/manageUsers">
            <ManageUsers />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
