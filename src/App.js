import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import FloorThree from "./components/floor3th";
import FloorFive from "./components/floor5th";
import Canvas from './components/canvas';
import Chat from "./components/chatClone";
import { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const userRef = useRef();
  const [response, setResponse] = useState("");
  let basePercentLeft = 5;
  let basePercentTop = 15;

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("94:B9:7E:FA:92:14", data => {
      let wifiInformation = JSON.parse(JSON.stringify(data));
      //setResponse(data);
      console.log(wifiInformation)
      userRef.current.style.left = basePercentLeft + wifiInformation["x"] * 4 + "%";
      userRef.current.style.top = basePercentTop + wifiInformation["y"] * 4 + "%";
    });
  }, []);
 
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/floor4">
        <Canvas />
      </Route>
      <Route path="/floor3">
        <FloorThree />
      </Route>
      <Route path="/floor5">
        <FloorFive />
      </Route>
      <Route path="/chat">
        <Chat />
      </Route>
    </Switch>
  </BrowserRouter>
    
  );
}

export default App;