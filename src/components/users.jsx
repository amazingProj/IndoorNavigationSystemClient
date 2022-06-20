import React, { useState, useEffect, useRef } from "react";
import "./style/canvas.css";
import socketIOClient from "socket.io-client";
import User from "./user";
import "./style/user.css";
import GuitarPlay from "./audio/guitar_chord1.mp3";

const playAudio = () => {
  const audio = new Audio();
  audio.src = GuitarPlay;
  audio.play();
};

const TrackedUsers = (props) => {
  const userRef = useRef();
  const count = useRef(0);
  const ENDPOINT = "http://127.0.0.1:4001";
  var [users, updateUsers] = useState([]);

  const userNames = {
    "94:B9:7E:FA:92:14": "אסף הלל",
    AssafAndroid1010: "אסף אנדרואיד",
  };

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("users/devices/location", (data) => {
      let unmounted = false;
      let wifiInformation = JSON.parse(JSON.stringify(data));
      console.log(wifiInformation);
      let xCor = wifiInformation["x"];
      let yCor = wifiInformation["y"];
      let zCor = wifiInformation["z"];
      let floorLevel = wifiInformation["FloorLevel"];
      let ID = wifiInformation["ID"];
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
      };
      count.current += 1;

      if (floorLevel == props.floor) {
        if (!unmounted) {
          let newUsers = users.filter((user) => user.id !== dict.id);
          updateUsers([...newUsers, dict]);
        }
      }
    });
  });

  return (
    <div>
      <div ref={userRef}>
        <div>
          {users.map((user) => (
            <User
              key={user.index}
              x={user.x}
              y={user.y}
              name={user.name}
              battery={user.battery}
              SOS={user.SOS}
            ></User>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackedUsers;
