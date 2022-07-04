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
import socketIOClient from "socket.io-client";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GuitarPlay from "./components/audio/guitar_chord1.mp3";

function App() {
  let pos = { x: "5", y: "4" };
  const [valid, setValid] = useState(false);
  var [AccessPoints, setAccessPoints] = useState([]);
  const MINUTE_MS = 60000;
  const ENDPOINT = "ws://127.0.0.1:4001";
  var [users, updateUsers] = useState([]);
  const count = useRef(0);

  const playAudio = () => {
    const audio = new Audio();
    audio.src = GuitarPlay;
    audio.play();
  };

  const userNames = {
    "94:B9:7E:FA:92:14": "אסף הלל",
    AssafAndroid1010: "אסף אנדרואיד",
  };

  useEffect(() => {
    console.log("app.js");
    const socket = socketIOClient(ENDPOINT);
    socket.on("users/devices/location", (data) => {
      let unmounted = false;
      let wifiInformation = JSON.parse(JSON.stringify(data));
      console.log(wifiInformation);
      let xCor = wifiInformation["x"];
      let yCor = wifiInformation["y"];
      let ID = wifiInformation["ID"];
      let floorLevel = wifiInformation["FloorLevel"];
      let userName = userNames[ID];
      let batteryInfo = wifiInformation["BATTERY"];
      let isAlarmed = wifiInformation["ISAlarmed"];
      if (isAlarmed) {
        playAudio();
      }
      let dict = {
        index: count.current,
        id: ID,
        x: xCor,
        y: yCor,
        name: userName,
        battery: batteryInfo,
        SOS: isAlarmed,
        floor: floorLevel,
      };
      count.current += 1;

      if (!unmounted) {
        let newUsers = users.filter((user) => user.id !== dict.id);
        updateUsers([...newUsers, dict]);
      }
    });
    return () => socket.disconnect();
  }, []);

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
            <FloorFour accessPoints={pos} users={users} />
          </Route>
          <Route path="/floor3">
            <FloorThree accessPoints={pos} users={users} />
          </Route>
          <Route path="/floor5">
            <FloorFive accessPoints={pos} users={users} />
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
