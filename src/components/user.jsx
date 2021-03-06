import React, { useState, useEffect, useRef } from "react";
import "./style/user.css";
import Gif from "./style/images/bullseye-animated.gif";

const User = (props) => {
  const userRef = useRef();
  const batteryRef = useRef();
  const textRef = useRef();
  let basePercentLeft = 14;
  let basePercentTop = 13;
  const batteryIsLow = 20;
  const [sos, setSos] = useState(true);

  useEffect(() => {
    let batteryIndex = props.battery;
    let sos = props.SOS;
    if (sos) {
      setSos(true);
    } else {
      setSos(false);
    }
    batteryRef.current.style.height = batteryIndex;
    textRef.current.innerText = batteryIndex;

    userRef.current.style.left = basePercentLeft + props.x * 2.94 + "%";
    userRef.current.style.top = basePercentTop + props.y * 4.76 + "%";
  }, []);

  return (
    <div>
      <div ref={userRef} className="user">
        <div>
          <img className={!sos ? "hidden" : ""} src={Gif} alt="alarmed" />
          <svg
            className={sos ? "hidden" : ""}
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1536 1536q0 63-61.5 113.5t-164 81-225 46T832 1792t-253.5-15.5-225-46-164-81T128 1536q0-49 33-88.5t91-66.5 118-44.5 131-29.5q26-5 48 10.5t26 41.5q5 26-10.5 48t-41.5 26q-58 10-106 23.5t-76.5 25.5-48.5 23.5-27.5 19.5-8.5 12q3 11 27 26.5t73 33 114 32.5 160.5 25 201.5 10 201.5-10 160.5-25 114-33 73-33.5 27-27.5q-1-4-8.5-11t-27.5-19-48.5-23.5-76.5-25-106-23.5q-26-4-41.5-26t-10.5-48q4-26 26-41.5t48-10.5q71 12 131 29.5t118 44.5 91 66.5 33 88.5zm-384-896v384q0 26-19 45t-45 19h-64v384q0 26-19 45t-45 19H704q-26 0-45-19t-19-45v-384h-64q-26 0-45-19t-19-45V640q0-53 37.5-90.5T640 512h384q53 0 90.5 37.5T1152 640zm-96-384q0 93-65.5 158.5T832 480t-158.5-65.5T608 256t65.5-158.5T832 32t158.5 65.5T1056 256z" />
          </svg>
          <p>{props.name}</p>
          <div id="battery" className={sos ? "hidden" : ""}>
            <div id="lvl" ref={batteryRef}></div>
            <div id="text" ref={textRef}></div>
            <div id="charging">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
