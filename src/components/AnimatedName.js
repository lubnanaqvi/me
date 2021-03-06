import React from "react";
import styled from "styled-components";
import "../keyframes.css";

const AnimatedName = () => {
  const StyledDiv = styled.div`
    width: 45%;
    height: 300px;
    overflow: visible;
    display: inline-block;
    vertical-align: middle;
  `;
  const StyledPath = styled.path`
    stroke: white;
    stroke-width: 3px;
    fill: transparent;
    stroke-dasharray: 0px;
    stroke-dashoffset: 0px;
  `;
  const letterPathStyles = (delay, name) => {
    return {
      strokeDasharray: "600px",
      strokeDashoffset: "-600px",
      animation: ` ${name} ${delay + 0.5}s linear ${delay}s forwards`,
      cursor: "pointer"
    };
  };
  const ww = window.innerWidth;
  const wh = window.innerHeight;
  const viewBoxWidth = ww > 625 ? 1000 : 500;
  const viewBoxHeight = wh > 625 ? 1000 : 500;
  return (
    <StyledDiv>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox={"280 50 " + viewBoxWidth + " " + viewBoxHeight}
      >
        <g>
          <StyledPath
            id="lpath"
            style={letterPathStyles(0, "L-anim")}
            d="M300.8,345.4l11.3-2.4c1.2-0.3,2.2-0.9,3-1.9c0.8-0.9,1.2-2.1,1.2-3.4v-98.8c0-1.4-0.4-2.5-1.2-3.5
        c-0.8-0.9-1.8-1.6-3-1.9l-11.3-2.3V227h47.6v4.2l-11.8,2.3c-1.2,0.2-2.2,0.9-3,1.9c-0.8,1-1.2,2.2-1.2,3.5v103.9h45
        c0.6,0,1.1-0.2,1.6-0.5c0.4-0.3,0.8-0.7,1.1-1.2c0.3-0.5,0.5-1,0.7-1.6s0.3-1,0.4-1.4l6.8-23.5h4.7v34.9h-91.7V345.4z"
          />
          <StyledPath
            id="upath"
            style={letterPathStyles(1, "U-anim")}
            d="M407.8,279.7c0-1.5-0.4-2.8-1.2-3.9c-0.8-1.1-2.3-2-4.3-2.7l-8.2-2.9v-2.4l28.6-6.1v53.5c0,4,0.2,7.6,0.6,10.8
        c0.4,3.2,1.3,5.9,2.6,8.2c1.3,2.3,3.2,4,5.7,5.2c2.5,1.2,5.8,1.8,9.9,1.8c1.8,0,3.6-0.2,5.6-0.5c1.9-0.3,3.8-0.8,5.7-1.6
        c1.9-0.7,3.6-1.6,5.3-2.8c1.7-1.2,3.2-2.6,4.5-4.3v-52.4c0-1.5-0.4-2.7-1.2-3.6c-0.8-0.8-2.2-1.6-4.2-2.3l-8.4-2.9v-2.4l28.7-6.8
        V333c0,1.5,0.4,2.8,1.2,3.9c0.8,1.1,2.2,1.9,4.3,2.6l8.2,2.6v2.4l-26.4,6.8h-1.9v-15.1c-2.3,3.2-4.5,5.8-6.7,7.8
        c-2.2,2-4.5,3.5-6.8,4.6c-2.3,1.1-4.7,1.8-7,2.2c-2.4,0.4-4.8,0.5-7.3,0.5c-3.9,0-7.5-0.6-10.8-1.7c-3.3-1.2-6.2-3-8.7-5.4
        c-2.4-2.5-4.3-5.6-5.7-9.5c-1.4-3.9-2.1-8.5-2.1-14V279.7z"
          />
          <StyledPath
            id="bpath"
            style={letterPathStyles(2, "B-anim")}
            d="M506.5,234c0-1.5-0.4-2.8-1.2-3.9c-0.8-1.1-2.3-2-4.3-2.7l-8.2-2.9v-2.4l28.6-6.8v56.2v4.4
        c2.4-3.4,4.9-6.2,7.5-8.2c2.6-2,5.1-3.5,7.6-4.5c2.5-1,4.8-1.6,6.9-1.9c2.2-0.3,4-0.4,5.5-0.4c5.3,0,10.1,1,14.3,3.1
        c4.2,2.1,7.7,5,10.6,8.7c2.9,3.7,5.1,8.2,6.7,13.4c1.5,5.2,2.3,10.9,2.3,17c0,6.8-0.9,13.2-2.8,19.1c-1.9,5.9-4.7,11.1-8.3,15.5
        c-3.6,4.4-8.1,7.9-13.3,10.4c-5.2,2.5-11.2,3.8-17.9,3.8c-2.5,0-5.1-0.1-7.8-0.3c-2.7-0.2-5.5-0.6-8.4-1.2
        c-2.8-0.6-5.7-1.4-8.7-2.4c-3-1-6-2.4-9-4V234z M521.4,338.1c0.8,0.8,1.9,1.7,3.3,2.6c1.4,0.9,3,1.8,4.7,2.6c1.7,0.8,3.4,1.5,5.1,2
        c1.7,0.5,3.3,0.8,4.7,0.8c4.8,0,9-1,12.5-3.1c3.5-2,6.4-4.8,8.7-8.2c2.3-3.4,4-7.3,5.1-11.7c1.1-4.4,1.6-8.9,1.6-13.6
        c0-5.6-0.5-10.7-1.6-15.4c-1-4.7-2.6-8.8-4.8-12.2c-2.2-3.4-4.9-6.1-8.3-8c-3.3-1.9-7.3-2.9-12-2.9c-1.4,0-2.9,0.1-4.6,0.4
        c-1.7,0.3-3.4,0.8-5.2,1.5c-1.7,0.7-3.4,1.7-5.1,2.9c-1.6,1.2-3.1,2.8-4.3,4.6V338.1z"
          />
          <StyledPath
            id="npath"
            style={letterPathStyles(3, "N-anim")}
            d="M591.3,345.5l9.7-2.2c1.2-0.3,2.1-0.9,2.9-1.8c0.7-0.9,1.1-2,1.1-3.3v-58.6c0-1.5-0.4-2.8-1.2-3.9
        c-0.8-1.1-2.3-2-4.3-2.7l-8.2-2.9v-2.4l28.2-6.1V276c2.3-3.1,4.5-5.7,6.8-7.7c2.3-2,4.6-3.5,6.9-4.6c2.3-1.1,4.7-1.8,7-2.2
        c2.4-0.4,4.8-0.6,7.2-0.6c3.9,0,7.5,0.6,10.8,1.7c3.4,1.2,6.3,3,8.8,5.4c2.5,2.5,4.4,5.6,5.9,9.5c1.4,3.9,2.1,8.5,2.1,13.9v46.4
        c0,1.5,0.4,2.7,1.2,3.6c0.8,0.9,1.7,1.5,2.8,1.8l8.5,2.2v4h-41.1v-4l9.8-2.2c1.1-0.3,2-0.9,2.8-1.8c0.7-0.9,1.1-2.1,1.1-3.6v-40.8
        c0-4-0.2-7.6-0.7-10.8c-0.4-3.2-1.4-6-2.8-8.3c-1.4-2.3-3.3-4-5.8-5.3c-2.5-1.2-5.8-1.9-9.9-1.9c-1.8,0-3.6,0.2-5.6,0.5
        c-1.9,0.4-3.8,0.9-5.7,1.6c-1.9,0.7-3.6,1.7-5.3,2.9c-1.7,1.2-3.2,2.6-4.5,4.3v58c0,1.4,0.4,2.5,1.1,3.3c0.7,0.9,1.7,1.4,2.9,1.7
        l8.5,2.2v4h-41.2V345.5z"
          />
          <StyledPath
            id="apath"
            style={letterPathStyles(4, "A-anim")}
            d="M739,344.4c-2.5,1.9-4.9,3.4-7.5,4.4c-2.5,1-5,1.7-7.5,2c-2.5,0.3-4.7,0.5-6.8,0.5c-3.4,0-6.4-0.6-9.2-1.9
        s-5.1-2.9-7.1-5c-2-2.1-3.5-4.5-4.6-7.3c-1.1-2.8-1.6-5.7-1.6-8.8c0-3.6,0.6-6.8,1.9-9.7c1.3-2.8,3-5.3,5.2-7.5
        c2.2-2.2,4.6-4,7.4-5.5c2.8-1.5,5.7-2.7,8.6-3.7c3-0.9,5.9-1.6,8.9-2.1c3-0.4,5.7-0.7,8.3-0.7c0.5,0,1.3,0,2.3,0.1
        c1,0.1,2.1,0.2,3.2,0.3c1.1,0.1,2.2,0.2,3.2,0.2c1,0.1,1.9,0.1,2.4,0.1l0.1-16c0-2.8-0.3-5.2-0.8-7.1c-0.5-1.9-1.3-3.4-2.3-4.5
        c-1-1.1-2.4-1.9-4-2.3c-1.6-0.4-3.5-0.7-5.8-0.7c-2.9,0-5.7,0.5-8.5,1.5c-2.8,1-5.3,2.2-7.8,3.6c-2.4,1.4-4.7,2.9-6.8,4.5
        c-2.1,1.6-3.9,2.9-5.3,4h-2l-2.8-14c1.7-0.9,3.6-1.9,5.7-2.9c2.1-1,4.4-1.8,6.8-2.6c2.4-0.7,5-1.3,7.8-1.8c2.8-0.5,5.6-0.7,8.7-0.7
        c3.6,0,7.3,0.5,11.1,1.5c3.8,1,7.2,2.6,10.3,4.8c3.1,2.2,5.6,5.1,7.5,8.7c1.9,3.6,2.9,8,2.8,13.2l-0.5,46.6c0,0.9,0.1,1.7,0.4,2.4
        c0.3,0.7,0.8,1.3,1.4,1.8c0.6,0.5,1.4,0.9,2.3,1.2c0.9,0.3,2,0.4,3.2,0.4c0.3,0,0.8-0.1,1.4-0.2c0.7-0.1,1.4-0.3,2.2-0.4
        c0.8-0.1,1.6-0.3,2.4-0.5c0.8-0.2,1.5-0.4,2.1-0.6h0.9v4.3c-0.8,0.7-1.9,1.4-3.2,2.3c-1.3,0.9-2.8,1.7-4.4,2.4
        c-1.6,0.7-3.2,1.4-4.9,1.9c-1.7,0.5-3.3,0.8-4.8,0.8c-2.3,0-4.2-0.2-6-0.7c-1.7-0.5-3.2-1.3-4.3-2.4c-1.2-1.1-2-2.6-2.6-4.4
        c-0.6-1.9-0.8-4.2-0.8-7C743.7,340,741.4,342.5,739,344.4z M746,304.5c-5.4,0-10.3,0.4-14.6,1.2c-4.4,0.8-8.1,2-11.1,3.6
        c-3.1,1.7-5.4,3.8-7.1,6.4c-1.7,2.6-2.5,5.7-2.5,9.3c0,3.1,0.5,5.7,1.4,7.8c0.9,2.1,2.1,3.8,3.6,5.1c1.5,1.3,3.1,2.2,4.9,2.8
        c1.8,0.6,3.6,0.8,5.3,0.8c1.7,0,3.4-0.2,5.3-0.5c1.9-0.4,3.7-0.9,5.5-1.6c1.8-0.7,3.5-1.7,5.1-2.9c1.6-1.2,3-2.6,4.1-4.3L746,304.5
        z"
          />
        </g>
      </svg>
    </StyledDiv>
  );
};
export default AnimatedName;
