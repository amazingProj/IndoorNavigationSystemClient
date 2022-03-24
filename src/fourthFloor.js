import React, { Component } from 'react';
import fourthFloorImage from './floor_Plan.svg';
import './floor.css';


class fourthFloor extends Component
{
    render()
    {
        return (
            <img src={fourthFloorImage} alt="fourth floor" height={300}
            width={500} />
        );
    }
}

export default fourthFloor;