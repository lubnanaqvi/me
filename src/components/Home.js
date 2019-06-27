import React from 'react';
import AnimatedName from './AnimatedName';
import AnimatedDecor from './AnimatedDecor';
import path from '../tree.json';
import styled from 'styled-components';
const Home = () => {
  const SpacerDiv = styled.div`
    height: 100px;
    background-color: #ff6f61;
  `;
  const StyledDiv = styled.div`
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
    @media( max-width:470px){
      height:200px;
      &::after{
        transform:skewY(15deg);
      }
    }
  `;

  return (
    <div>
      <SpacerDiv />
      <StyledDiv expand>
        <AnimatedDecor pathData={path} />
        <AnimatedName />
      </StyledDiv>
    </div>
  );
};
export default Home;
