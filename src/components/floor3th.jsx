import React, { useState, useEffect, useRef } from "react";
import './style/canvas.css';
import accessPointImage from './style/images/accessPoint.svg'


const FloorThree = () => {
  
    const canvas = useRef();
    let ctx = null;

    const drawFillRect = (info, style = {}) => {
      const { x, y, w, h } = info;
      const { backgroundColor = 'black' } = style;
      let offsetX = 0.025 * window.innerWidth;
      let offsetY = 0.01 * window.innerHeight;
      ctx.beginPath();
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(x + offsetX, y + offsetY, w, h);
    }



    const drawLine = (info, style = {}) => {
        const { x, y, x1, y1 } = info;
        const { color = 'black', width = 1 } = style;
        let height = window.innerWidth;
        let fracH = Math.trunc(height / 34);
        let offsetX = 5 * fracH;
        let offsetY = 0.01 * window.innerHeight;
        ctx.beginPath();
        ctx.moveTo(x + offsetX, y + offsetY);
        ctx.lineTo(x1 + offsetX, y1 + offsetY);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
      }

      const drawLineWithoutOffset = (info, style = {}) => {
        const { x, y, x1, y1 } = info;
        const { color = 'black', width = 1 } = style;
        ctx.beginPath();
        ctx.moveTo(x , y);
        ctx.lineTo(x1 , y1);
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

        
        let width = window.innerHeight * 0.8;
      let height = window.innerWidth;
      let fracH = Math.trunc(height / 34);
      let fracW = Math.trunc(width / 17);
      let offsetX = 4.1 * fracH;
      let offsetY = 0.01 * window.innerHeight;
      let xOffset = 0.025 * window.innerWidth;
      let image = new Image();
      image.addEventListener('load', function () {
        ctx.drawImage(image, xOffset + 17.5 * fracH, offsetY + 5.5 * fracW)
      }, false);
    
      image.src = accessPointImage;
      

      let image2 = new Image();
      image.addEventListener('load', function () {
        ctx.drawImage(image, xOffset + 17.5 * fracH, offsetY + 16 * fracW)
      }, false);
    
      image2.src = accessPointImage;
      
      let colorBorder = {color: 'black', width: 5};
      drawLine({x: 9.5 * fracH, y: 0, x1: 9.5 * fracH, y1: 7.1 * fracW }, {color: 'black', width: 3})
      drawLine({x: 0, y: 7.1 * fracW, x1: 2 * fracH, y1: 7.1 * fracW }, colorBorder)
      drawLine({x: 3.6 * fracH, y: 7.1 * fracW, x1: 9.5 * fracH, y1: 7.1 * fracW }, colorBorder)
      ctx.font = "22px Arial";
      ctx.fillStyle = "#00000F";
      ctx.textAlign = "right";      
      ctx.fillText("כיתה 315", 5 * fracH + offsetX, 3.7 * fracW);

      drawLine({x: 0 * fracH, y: 1 * fracW, x1: 0, y1: 8.8 * fracW }, colorBorder)
      drawLine({x: 0.5 * fracH, y: 0, x1: 16.5 * fracH, y1: 0 }, colorBorder)
      drawLine({x: 0 * fracH, y: 1 * fracW, x1: 0, y1: 8.8 * fracW }, colorBorder)
      drawLine({x: 0.5 * fracH, y: 0, x1: 0.5 * fracH, y1: 1 * fracW }, colorBorder)
      drawLine({x: 0.5 * fracH, y: 1 * fracW, x1: 0, y1: 1 * fracW }, colorBorder)
      drawLine({x: 15.5 * fracH, y: 0, x1: 15.5 * fracH, y1: 7.1 * fracW }, colorBorder)
      drawLine({x: 15.5 * fracH, y: 7.1 * fracW, x1: 20 * fracH, y1: 7.1 * fracW }, colorBorder)
      drawLine({x: 21.8 * fracH, y: 7.1 * fracW, x1: 24 * fracH, y1: 7.1 * fracW }, colorBorder)
      


      drawLine({x: 9.5 * fracH, y: 6 * fracW, x1: 11.5 * fracH, y1: 6 * fracW }, {color: 'black', width: 3})
      drawLine({x: 13.5 * fracH, y: 6 * fracW, x1: 15.5 * fracH, y1: 6 * fracW }, {color: 'black', width: 3})
      ctx.fillText("כיתה 302", 14 * fracH + offsetX, 8 * fracW);

      // left-down
      drawLine({x: 0, y: 10.8 * fracW, x1: 0, y1: 17.5 * fracW }, colorBorder)
      drawLine({x: 0, y: 17.4 * fracW, x1: 9.5 * fracH, y1: 17.4 * fracW }, colorBorder)
      drawLine({x: 9.5 * fracH, y: 10.8 * fracW, x1: 9.5 * fracH, y1: 17.5 * fracW }, {color: 'black', width: 3})
      drawLine({x: 1 * fracH, y: 10.8 * fracW, x1: 5 * fracH, y1: 10.8 * fracW }, colorBorder)      
      drawLine({x: 6.6 * fracH, y: 10.8 * fracW, x1: 9.5 * fracH, y1: 10.8 * fracW }, colorBorder)
      
      ctx.fillText("חדר 310", 8.5 * fracH + offsetX, 12 * fracW);
       
      drawLine({x: 9.5 * fracH, y: 16 * fracW, x1: 12 * fracH, y1: 16 * fracW }, colorBorder)
      drawLine({x: 14 * fracH, y: 16 * fracW, x1: 15.5 * fracH, y1: 16 * fracW }, colorBorder)
      drawLine({x: 15.5 * fracH, y: 10.8 * fracW, x1: 15.5 * fracH, y1: 17.5 * fracW }, colorBorder)
      ctx.font = "22px Arial";
      ctx.fillStyle = "#00000F";
      ctx.textAlign = "right"; 
      ctx.fillText("מבואה- לובי", 15 * fracH + offsetX, 15 * fracW);

      ctx.font = "22px Arial";
      ctx.fillStyle = "#00000F";
      ctx.textAlign = "right"; 
      ctx.fillText("מדרגות", 4.3 * fracH , 10.5 * fracW);

      ctx.font = "22px Arial";
      ctx.fillStyle = "#00000F";
      ctx.textAlign = "right"; 
      ctx.fillText("מדרגות", 31.3 * fracH , 10.5 * fracW);

      let insideWallsTheme = {color: 'black', width: 3}
     
      drawLine({x: 17.5 * fracH, y: 10.8 * fracW, x1: 24 * fracH, y1: 10.8 * fracW }, colorBorder)
      
      // left-top side door
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.fillStyle = "#00000F";
      ctx.arc(5.4 * fracH, 9 * fracW, 1 * fracW, 3 * Math.PI/4, Math.PI, false);
      ctx.stroke();
      drawLine({x: -0.25 * fracH, y: 10.8 * fracW, x1: 0 * fracH, y1: 10.8 * fracW }, {color: 'black', width: 2})
      

      // left-down side door
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.fillStyle = "#00000F";
      ctx.arc(5.4 * fracH, 10.5 * fracW, 1 * fracW, 3.5 * Math.PI/ 4, 5 * Math.PI / 4, false);
      ctx.stroke();
      drawLine({x: -0.25 * fracH, y: 8.8 * fracW, x1: 0 * fracH, y1: 8.8 * fracW }, {color: 'black', width: 2})
      

      // right-top side door
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.fillStyle = "#00000F";
      ctx.arc((28.7) * fracH, 9 * fracW, 1 * fracW, 0, Math.PI / 2, false);
      ctx.stroke();
      drawLine({x: 24 * fracH, y: 8.8 * fracW, x1: 24.4 * fracH, y1: 8.8 * fracW }, {color: 'black', width: 2})
      
      // right-down side door
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.fillStyle = "#00000F";
      ctx.arc((28.7) * fracH, 11 * fracW, 1 * fracW,  6 * Math.PI / 4,  2 * Math.PI, false);
      ctx.stroke();
      drawLine({x: 24 * fracH, y: 10.8 * fracW, x1: 24.4 * fracH, y1: 10.8 * fracW }, {color: 'black', width: 2})

      // right-top
      drawLine({x: 16.5 * fracH, y: 0, x1: 24 * fracH, y1: 0 }, colorBorder)
      // right-top-down
      drawLine({x: 24 * fracH, y: 0, x1: 24 * fracH, y1: 8.8 * fracW }, colorBorder)

      
      // right-down
      drawLine({x: 15.5 * fracH, y: 17.4 * fracW, x1: 24 * fracH, y1: 17.4 * fracW }, colorBorder)
      // right-down- to top
      drawLine({x: 24 * fracH, y: 17.4 * fracW, x1: 24 * fracH, y1: 10.8 * fracW }, colorBorder)
      
      ctx.fillText("מעבדת מחשבים", 27 * fracH , 15 * fracW);
      ctx.fillText("חדר 320", 26 * fracH , 13 * fracW);
      ctx.fillText("מעבדת", 13 * fracH , 14 * fracW);
      ctx.fillText("אלקרו-אופטיקה", 13 * fracH , 14.5 * fracW);
      ctx.fillText("כיתה 325", 26 * fracH , 6 * fracW);

      for (let j = 0; j < 6; ++j)
      {
        for (let i = 0; i < 3; ++i)
        {
          drawFillRect({ x: (4.3 + j) * fracH + offsetX, y: (4.25 + i) * fracW, w: 0.3 * fracH, h: 0.5 * fracW }, { backgroundColor: 'black' });
          drawFillRect({ x: (3.8 + j) * fracH + offsetX, y: (3.85 + i) * fracW, w: 0.6 * fracH, h: 1.1 * fracW }, { backgroundColor: '#cd8500' });
        }
      }

      for (let j = 0; j < 4; j++)
      {
        for (let i = 0; i < 4; ++i)
        {
          
          drawFillRect({ x: (20 + j) * fracH + offsetX, y: (1.1 + i) * fracW, w: 0.3 * fracH, h: 0.5 * fracW }, { backgroundColor: 'black' });
          drawFillRect({ x: (19.5 + j) * fracH + offsetX, y: (0.75 + i) * fracW, w: 0.6 * fracH, h: 1.1 * fracW }, { backgroundColor: '#cd8500' });
        
        }
      }

      // class 302
      for (let j = 0; j < 3; ++j)
      {
        for (let i = 0; i < 4; ++i)
        {
          drawFillRect({ x: (10 + j) * fracH + offsetX, y: (0.4 + i) * fracW, w: 0.3 * fracH, h: 0.5 * fracW }, { backgroundColor: 'black' });
          drawFillRect({ x: (10.2 + j) * fracH + offsetX, y: (0.1 + i) * fracW, w: 0.6 * fracH, h: 1.1 * fracW }, { backgroundColor: '#cd8500' });
        }
      }

      // stairs - left
      drawLine({x: 0 * fracH, y: 8.2 * fracW, x1: -4.6 * fracH, y1: 8.2 * fracW }, {color: 'blue', width: 3})
      drawLine({x: -4.6 * fracH, y: 8.2 * fracW, x1: -4.6 * fracH, y1: 10.2 * fracW }, {color: 'blue', width: 3})
      
      drawLine({x: 27 * fracH, y: 12.5 * fracW, x1: 27 * fracH, y1: 10.5 * fracW }, {color: 'black', width: 3})
      drawLine({x: 27 * fracH, y: 12.5 * fracW, x1: 25.5 * fracH, y1: 12.5 * fracW }, {color: 'black', width: 3})
      drawLine({x: 25.5 * fracH, y: 12.5 * fracW, x1: 25.5 * fracH, y1: 10.5 * fracW }, {color: 'black', width: 3})
      drawLine({x: 27 * fracH, y: 10.5 * fracW, x1: 26.4 * fracH, y1: 10.5 * fracW }, {color: 'black', width: 3})
      drawLine({x: 25.46 * fracH, y: 10.5 * fracW, x1: 25.8 * fracH, y1: 10.5 * fracW }, {color: 'black', width: 3})
    
      ctx.font = "18px Arial";
      ctx.fillStyle = "#00000F";
      ctx.textAlign = "right"; 
      ctx.fillText("מעלית", 31.8 * fracH , 12 * fracW);

      drawLine({x: 24 * fracH, y: 8.2 * fracW, x1: 28.6 * fracH, y1: 8.2 * fracW }, {color: 'blue', width: 3})
      drawLine({x: 28.6 * fracH, y: 8.2 * fracW, x1: 28.6 * fracH, y1: 10.2 * fracW }, {color: 'blue', width: 3})
      drawLine({x: 9.5 * fracH, y: 14 * fracW, x1: 12 * fracH, y1: 14 * fracW }, {color: 'black', width: 3})
      drawLine({x: 14 * fracH, y: 14 * fracW, x1: 15.5 * fracH, y1: 14 * fracW }, {color: 'black', width: 3})
    }, []);
    
    
      useEffect(() => {
        let width = window.innerHeight * 0.8;
        let height = window.innerWidth;
        let fracH = Math.trunc(height / 34);

        ctx.font = "12px Arial";
        ctx.fillStyle = "#00000F";
        ctx.textAlign = "right"; 

          for (let i = 1; i < 34; ++i){
            drawLineWithoutOffset({ x: i * fracH, y: 0, x1: i * fracH, y1: height });
            
            if (i < 6)
            {
              ctx.fillText(6 - i + "-", i * fracH - 2,Math.trunc(width * 0.05));
            }
            else if (i < 30)
            {
              ctx.fillText(i - 5, i * fracH - 2,Math.trunc(width * 0.05));
            }
            else
            {
              ctx.fillText((i - 29) + "+", i * fracH - 2,Math.trunc(width * 0.05));
            }
            
          }
        let fracW = Math.trunc(width / 17.2);
        
        for (let i = 1; i < 18; ++i){
          drawLineWithoutOffset({ x: 0, y: i * fracW, x1: height, y1: i * fracW });
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

export default FloorThree;