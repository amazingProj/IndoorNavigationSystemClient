import React, { useState, useEffect, useRef } from "react";
import "./style/canvas.css";
import User from "./user";
import "./style/user.css";

const TrackedUsers = (props) => {
  const userRef = useRef();

  useEffect(() => {
    console.log(props.users);
  });

  return (
    <div>
      <div ref={userRef}>
        <div>
          {props.users
            .filter((user) => user.floor == props.floor)
            .map((user) => (
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
