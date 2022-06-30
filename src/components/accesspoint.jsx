import { useEffect } from "react";
import { useState } from "react";

import ReactDom from "react-dom";
import "./style/accesspoint.css";
const AccessPoint = (props) => {
  function useMouse() {
    const [mousePosition, setMousePosition] = useState({
      x: null,
      y: null,
    });

    useEffect(() => {
      function handle(e) {
        setMousePosition({
          x: e.pageX,
          y: e.pageY,
        });
      }
      document.addEventListener("mousemove", handle);
      return () => {
        document.removeEventListener("mousemove", handle);
      };
    });

    return mousePosition;
  }

  const { x, y } = useMouse();
  return (
    <div className="point">
      <svg
        height="30"
        width="30"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm128 0q0-159-112.5-271.5T896 512 624.5 624.5 512 896t112.5 271.5T896 1280t271.5-112.5T1280 896zm128 0q0 212-150 362t-362 150-362-150-150-362 150-362 362-150 362 150 150 362zm128 0q0-130-51-248.5t-136.5-204-204-136.5T896 256t-248.5 51-204 136.5-136.5 204T256 896t51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zm128 0q0 209-103 385.5T1281.5 1561 896 1664t-385.5-103T231 1281.5 128 896t103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z" />
      </svg>
      <p>{x}</p>
      <p>{y}</p>
    </div>
  );
};

export default AccessPoint;
