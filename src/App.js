import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import FloorThree from "./components/floor3th";
import FloorFive from "./components/floor5th";
import FloorFour from "./components/floor4th";
import Home from "./components/home";
import ManageUsers from "./components/manageUsers";
import Aps from "./components/accesspointsManager";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  let pos = { x: "5", y: "4" };
  const [valid, setValid] = useState(false);
  var [AccessPoints, setAccessPoints] = useState([]);
  const MINUTE_MS = 60000;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Logs every minute");
      setValid(false);
    }, MINUTE_MS);

    if (!valid) {
      axios.get("http://localhost:4001/aps").then((res) => {
        setAccessPoints(res.data);
        setValid(true);
      });
    }

    return () => clearInterval(interval);
  });

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
            <FloorThree accessPoints={pos} />
          </Route>
          <Route path="/floor5">
            <FloorFive />
          </Route>
          <Route path="/manageUsers">
            <ManageUsers />
          </Route>
          <Route path="/manageAPs">
            <Aps accessPoints={AccessPoints} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
