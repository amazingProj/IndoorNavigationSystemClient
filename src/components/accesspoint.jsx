import { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";
import "./style/accesspoint.css";
import axios from "axios";

const AccessPoint = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const height = window.innerWidth;
  const fracH = height / 34;
  const width = window.innerHeight * 0.8;
  const fracW = width / 17;
  let offsetX = 4.1 * fracH;
  let offsetY = 0.01 * window.innerHeight;
  let basePercentLeft = 0.15 * window.innerWidth;
  let basePercentTop = 0.15 * window.innerHeight;

  const handleClick = () => {
    const xOffset = 0.025 * window.innerWidth;
    const height = window.innerWidth;
    const fracH = height / 34;

    setIsClicked(!isClicked);
    if (isClicked) {
      let newAps = {};
      var tmp = parseInt(point.current.style.left, 10);
      var number = parseInt(point.current.style.top, 10);
      newAps["x"] = (tmp - (basePercentLeft + xOffset)) / fracH;
      newAps["y"] = (number - (basePercentTop + offsetY)) / fracW;
      newAps["bssid"] = props.bssid;
      newAps["floorLevel"] = props.floor;
      console.log(newAps);
      axios
        .post("http://localhost:4001/aps/update/" + props.id, newAps)
        .then((res) => console.log(res.data));
    }
  };
  const point = useRef();

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

  useEffect(() => {
    const xOffset = 0.025 * window.innerWidth;
    const height = window.innerWidth;
    const fracH = height / 34;
    if (firstTime) {
      point.current.style.top =
        basePercentTop + offsetY + props.y * fracW + "px";
      point.current.style.left =
        basePercentLeft + xOffset + props.x * fracH + "px";
      setFirstTime(false);
    } else if (x != null && y != null) {
      let width = window.innerHeight;
      let height = window.innerWidth;

      if (isClicked) {
        if (0.13 * width < y && y < 0.95 * width) {
          if (0.13 * width > y) {
            point.current.style.top = 0.13 * width + "px";
          } else if (0.95 * width < y) {
            point.current.style.top = 0.95 * width + "px";
          } else {
            point.current.style.top = y + "px";
          }
        }
        if (0.0004 * height < x && x < 0.99 * height) {
          if (0.0004 * height > x) {
            point.current.style.left = 0.0004 * height + "px";
          } else if (x > 0.99 * height) {
            point.current.style.left = 0.99 * height + "px";
          } else {
            point.current.style.left = x + "px";
          }
        }
      }
    }
  });

  useEffect(() => {
    console.log(props.id);
  }, [props.id]);

  return (
    <div className="point" ref={point} onClick={handleClick}>
      <svg
        height="30"
        width="30"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm128 0q0-159-112.5-271.5T896 512 624.5 624.5 512 896t112.5 271.5T896 1280t271.5-112.5T1280 896zm128 0q0 212-150 362t-362 150-362-150-150-362 150-362 362-150 362 150 150 362zm128 0q0-130-51-248.5t-136.5-204-204-136.5T896 256t-248.5 51-204 136.5-136.5 204T256 896t51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zm128 0q0 209-103 385.5T1281.5 1561 896 1664t-385.5-103T231 1281.5 128 896t103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z" />
      </svg>
    </div>
  );
};

export default AccessPoint;
