import React, { useState, useEffect, useRef } from "react";
import './style/canvas.css';

const Canvas = () => {
    const canvas = useRef();
    let ctx = null;

    const drawLine = (info, style = {}) => {
        const { x, y, x1, y1 } = info;
        const { color = 'black', width = 1 } = style;
        let offsetX = 0.025 * window.innerWidth;
        let offsetY = 0.01 * window.innerHeight;
        ctx.beginPath();
        ctx.moveTo(x + offsetX, y + offsetY);
        ctx.lineTo(x1 + offsetX, y1 + offsetY);
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
        let height = window.innerWidth * 0.9;
        let fracH = Math.trunc(height / 21);
        let fracW = Math.trunc(width / 17);
        
        drawLine({x: 0, y: 0, x1: 0, y1: 8.8 * fracW }, {color: 'white', width: 5})
        drawLine({x: 0, y: 0, x1: 8.8 * fracH, y1: 0}, {color: 'white', width: 5})
        drawLine({x: 8.8 * fracH, y: 0, x1: 8.8 * fracH, y1: 8.8 * fracW }, {color: 'white', width: 5})
        drawLine({x: 0, y: 8.8 * fracW, x1: 8.8 * fracH, y1: 8.8 * fracW }, {color: 'white', width: 5})
        ctx.font = "22px Arial";
        ctx.fillStyle = "#00000F";
        ctx.textAlign = "right";      
        ctx.fillText("כיתה 460", 5 * fracH - 2, 5 * fracW);

        drawLine({x: 0 * fracH, y: 0, x1: 0, y1: 8.8 * fracW }, {color: 'white', width: 5})
        drawLine({x: 0 * fracH, y: 0, x1: 16.5 * fracH, y1: 0 }, {color: 'white', width: 5})
        drawLine({x: 16.5 * fracH, y: 0, x1: 16.5 * fracH, y1: 8.8 * fracW }, {color: 'white', width: 5})
        drawLine({x: 8.8 * fracH, y: 8.8 * fracW, x1: 16.5 * fracH, y1: 8.8 * fracW }, {color: 'white', width: 5})
        ctx.font = "22px Arial";
        ctx.fillStyle = "#00000F";
        ctx.textAlign = "right";      
        ctx.fillText("כיתה 440", 14 * fracH - 2, 5 * fracW);

        drawLine({x: 0, y: 10.8 * fracW, x1: 0, y1: 17.5 * fracW }, {color: 'white', width: 5})
        drawLine({x: 0, y: 17.4 * fracW, x1: 8.7 * fracH, y1: 17.4 * fracW }, {color: 'white', width: 5})
        drawLine({x: 8.7 * fracH, y: 10.8 * fracW, x1: 8.7 * fracH, y1: 17.5 * fracW }, {color: 'white', width: 5})
        drawLine({x: 0, y: 10.8 * fracW, x1: 8.7 * fracH, y1: 10.8 * fracW }, {color: 'white', width: 5})
        ctx.font = "22px Arial";
        ctx.fillStyle = "#00000F";
        ctx.textAlign = "right"; 
        ctx.fillText("כיתה 470", 5 * fracH - 2, 15 * fracW);

        
        drawLine({x: 0, y: 17.4 * fracW, x1: 15.2 * fracH, y1: 17.4 * fracW }, {color: 'white', width: 5})
       
        drawLine({x: 15.2 * fracH, y: 10.8 * fracW, x1: 15.2 * fracH, y1: 17.5 * fracW }, {color: 'white', width: 5})
        drawLine({x: 0, y: 10.8 * fracW, x1: 15.2 * fracH, y1: 10.8 * fracW }, {color: 'white', width: 5})
        ctx.font = "22px Arial";
        ctx.fillStyle = "#00000F";
        ctx.textAlign = "right"; 
        ctx.fillText("כיתה 450", 13 * fracH - 2, 15 * fracW);

        ctx.font = "22px Arial";
        ctx.fillStyle = "#00000F";
        ctx.textAlign = "right"; 
        ctx.fillText("מדרגות", 1 * fracH, 10 * fracW);

        ctx.font = "22px Arial";
        ctx.fillStyle = "#00000F";
        ctx.textAlign = "right"; 
      })
  
     
      useEffect(() => {
        let width = window.innerHeight * 0.8;
        let height = window.innerWidth * 0.9;
        let fracH = Math.trunc(height / 21);

          for (let i = 1; i < 22; ++i){
            drawLine({ x: i * fracH, y: 0, x1: i * fracH, y1: height });
            ctx.font = "12px Arial";
             
            ctx.textAlign = "right";      
            ctx.fillText(i, i * fracH - 2,Math.trunc(width * 0.05));
          }
        let fracW = Math.trunc(width / 17);
        
        for (let i = 1; i < 18; ++i){
            drawLine({ x: 0, y: i * fracW, x1: height, y1: i * fracW });
            ctx.textAlign = "left";
ctx.fillText(i, 0, i * fracW - 2);
          }
      }, []);

    return (
        <div>
            <canvas ref={canvas}></canvas>
        </div>
    );
}

export default Canvas;