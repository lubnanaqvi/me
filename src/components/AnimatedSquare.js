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
  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      width="10%"
      viewBox="0 0 340 333"
      enableBackground="new 0 0 340 333"
      style={{
        display: `inline-block`,
        overflow: `visible`,
        transform: `rotate(${rotated}deg)`
      }}
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
    </svg>
  );
};
export default AnimatedSquare;
