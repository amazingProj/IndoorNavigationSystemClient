import React, { useState, useEffect, useRef } from "react";
import './style/canvas.css';

const Canvas = () => {
    const canvas = useRef();
    let ctx = null;

    const drawLine = (info, style = {}) => {
        const { x, y, x1, y1 } = info;
        const { color = 'black', width = 1 } = style;
     
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
      }

    useEffect(() => {
        // dynamically assign the width and height to canvas
        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;
     
        // get context of the canvas
        ctx = canvasEle.getContext("2d");
      }, []);

      useEffect(() => {
        let width = window.innerHeight * 0.8;
        let height = window.innerWidth * 0.8;
        let frac = Math.trunc(height / 21);
      
          for (let i = 1; i < 22; ++i){
            drawLine({ x: i * frac, y: 0, x1: i * frac, y1: height });
            ctx.font = "15px Arial";    
             
            ctx.textAlign = "right";      
            ctx.fillText(i, i * frac - 2,Math.trunc(width * 0.05));
          }
        frac = Math.trunc(width / 17);
        
          for (let i = 1; i < 18; ++i){
            drawLine({ x: 0, y: i * frac, x1: height, y1: i * frac });
            ctx.textAlign = "left";
ctx.fillText(i, 0, i * frac - 2);
          }
      }, []);

    return (
        <div>
            <canvas ref={canvas}></canvas>
        </div>
    );
}

export default Canvas;