import React from 'react';
import AnimatedName from './AnimatedName';
import squares from '../squares.json';
import AnimatedSquare from './AnimatedSquare';
import AnimatedDecor from './AnimatedDecor';
import path from '../decoration.json';
import styled from 'styled-components';
const AnimatedBackGround = () => {
  const StyledDiv = styled.div`
    margin: auto;
    padding-top: 100px;
    height: 500px;
    width: ${props => (props.expand ? '90%' : '50%')};
    overflow: ${props => (props.hideOverflow ? 'hidden' : 'visible')};
    @media (max-width: 600px) {
      height: 300px;
    }
  `;
  const bgSquares = squares.map((s, i) => {
    return <AnimatedSquare key={i} square={s} />;
  });
  return (
    <StyledDiv expand>
      <AnimatedDecor pathData={path} />
      <AnimatedName />
    </StyledDiv>
  );
};
export default AnimatedBackGround;
/*<StyledDiv expand>{bgSquares}</StyledDiv>*/
