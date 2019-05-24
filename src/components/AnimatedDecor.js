import React from 'react';
import styled from 'styled-components';
const AnimatedDecor = ({ pathData }) => {
  const StyledDiv = styled.div`
    display: inline-block;
    vertical-align: middle;
    height: 300px;
    width: 45%;
    margin: auto;
  `;
  const StyledPath = styled.path`
    stroke: white;
    stroke-width: 2px;
    fill: transparent;
    stroke-dasharray: 0px;
    stroke-dashoffset: 0px;
  `;
  const deco = pathData.map((p, i) => {
    return (
      <StyledPath
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: 100,
          animation: `dPath 5s ease-out ${p.delay}s forwards infinite`
        }}
        d={p.path}
        key={i}
      />
    );
  });
  return (
    <StyledDiv>
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="-550 0 1000 1000"
        enableBackground="new -450 100 1500 1500"
      >
        {deco}
      </svg>
    </StyledDiv>
  );
};
export default AnimatedDecor;
/*
future inspiration https://pixabay.com/get/ea35b20a2bfd1c3e955b4701e345479ee36ae3d01cb6144894f5c079/branch-303539.svg
*/
