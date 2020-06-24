import React from "react";
import styled, { keyframes } from "styled-components";

const Bubble = ({ fromX, fromY, toX, toY }) => {
  const MyKeyframe = keyframes`
    0% {
      top: ${fromY + "px"};
      left:${fromX + "px"};
    }
    100% {
      top: ${toY + "px"};
      left:${toX + "px"};
    }
  `;
  const StyledDiv = styled.div`
    border: solid 1px #717165;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    position: absolute;
    -webkit-animation: ${MyKeyframe} 25s linear infinite;
    animation: ${MyKeyframe} 25s linear infinite;
    @media (max-width: 600px) {
      width: 10px;
      height: 10px;
    }
  `;
  return <StyledDiv></StyledDiv>;
};
export default Bubble;
