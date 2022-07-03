import React, { useState, useEffect, useRef } from "react";
import AccessPoint from "./accesspoint";

const AccessPoints = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    //console.log(props.accessPoints);
    setLoading(true);
    if (props.accessPoints != null) {
      setData(props.accessPoints);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error || !Array.isArray(data)) {
    return <p>There was an error loading your data!</p>;
  }

  return (
    <div>
      {data
        .filter((accessPoints) => !accessPoints)
        .map((accessPoint) => (
          <AccessPoint x={accessPoint.x} y={accessPoint.y} />
        ))}
    </div>
  );
};

export default AccessPoints;
