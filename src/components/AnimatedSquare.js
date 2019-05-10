import React from 'react';
import styled from 'styled-components';
const AnimatedSquare = ({ square }) => {
  const { ax, ay, bx, by, cx, cy, dx, dy, rotated, delay } = square;
  const StyledPath = styled.path`
    stroke: white;
    stroke-width: 5px;
    fill: transparent;
    stroke-dasharray: 0px;
    stroke-dashoffset: 0px;
  `;
  const StyledSvg = styled.svg`
    display: inline-block;
    overflow: visible;
    width: 10%;
    transform: rotate(${rotated}deg);
    @media (max-width: 600px) {
      width: 15%;
      margin: 2%;
    }
  `;
  return (
    <StyledSvg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 340 333"
      enableBackground="new 0 0 340 333"
    >
      <StyledPath
        id="sqPath"
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: 100,
          animation: `dash ${delay}s linear`
        }}
        d={`M${ax},${ay} L${bx},${by} L${cx},${cy} L${dx},${dy} L${ax},${ay}`}
      />
    </StyledSvg>
  );
};
export default AnimatedSquare;
