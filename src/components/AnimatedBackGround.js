import React from 'react';
import AnimatedName from './AnimatedName';
import AnimatedDecor from './AnimatedDecor';
import path from '../tree.json';
import styled from 'styled-components';
const AnimatedBackGround = () => {
  const StyledDiv = styled.div`
    padding-top: 100px;
    height: 300px
    background-color: #ff6f61;
    position:relative;
    &::after {
      content: '';
    background-color:#ff6f61;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: skewY(5deg);
    transform-origin: 0%;
    z-index: -1;
    }
  `;

  return (
    <StyledDiv expand>
      <AnimatedDecor pathData={path} />
      <AnimatedName />
    </StyledDiv>
  );
};
export default AnimatedBackGround;
/*<StyledDiv expand>{bgSquares}</StyledDiv>*/