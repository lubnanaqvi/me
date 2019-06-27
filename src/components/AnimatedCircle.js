import React from 'react';
import styled from 'styled-components';
const AnimatedCircle = ({ index, coords, rotated, radius, delay, anti }) => {
  const { ax, ay, bx } = coords;
  const StyledPath = styled.path`
    stroke: #717165;
    stroke-width: 5px;
    fill: transparent;
    stroke-dasharray: 0px;
    stroke-dashoffset: 0px;
    @media (max-width: 600px) {
      stroke: #9e9e8e;
    }
  `;
  const StyledSvg = styled.svg`
    display: inline-block;
    overflow: visible;
    width: 8%;
    transform: rotate(${rotated}deg);
    @media (max-width: 800px) {
      width: 10%;
      display: ${index > 20 ? 'none' : 'inline-block'};
      margin: 2%;
      padding: 0;
    }
  `;
  return (
    <StyledSvg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 500 500"
      enableBackground="new 0 0 500 500"
    >
      <StyledPath
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: 100,
          animation: `dash ${delay + 2}s ease-in-out 0s forwards infinite`
        }}
        d={`M ${ax},${ay} a ${bx},${bx} 0 1,0 ${!anti ? '-' : ''}${bx +
          radius},0 a ${bx},${bx} 0 1,0 ${anti ? '-' : ''}${bx + radius},0`}
      />
    </StyledSvg>
  );
};
export default AnimatedCircle;
