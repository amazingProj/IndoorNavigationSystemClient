import React, { useState, useEffect, useRef } from "react";
import './style/bullseye.css';
import accessPointImage from './style/images/accessPoint.svg'

const WiFiAccessPointOnMap = (props) => {
    const accessPointRef = useRef();
    
    useEffect(() => {
      }, []);

    return (
        <div ref={accessPointRef}>
            <img src={accessPointImage} alt='accessPoint'
                width={200} height={200}
                id="object1"
            />
        </div>
    );
}

export default WiFiAccessPointOnMap;