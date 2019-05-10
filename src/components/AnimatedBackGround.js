import React from 'react';
import StyledDiv from './StyledDiv';
import AnimatedName from './AnimatedName';
import squares from '../squares.json';
import AnimatedSquare from './AnimatedSquare';
const AnimatedBackGround = () => {
  const bgSquares = squares.map((s, i) => {
    return <AnimatedSquare key={i} square={s} />;
  });
  return (
    <div>
      <StyledDiv hideOverflow>
        <AnimatedName />
      </StyledDiv>
      <StyledDiv expand>{bgSquares}</StyledDiv>
    </div>
  );
};
export default AnimatedBackGround;
