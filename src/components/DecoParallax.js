import React from 'react';

import styled from 'styled-components';

const DecoParallax = ({ height, width, bgUrl, smallBgUrl }) => {
  const StyledDiv = styled.div`
    position: relative;
    top: 400px;
    background: url(${bgUrl});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    height: ${height};
    width: ${width};
    margin: 100px auto;
    filter: grayscale(20%);
    @media (max-width: 825px) {
      width: 95%;
      background: url(${smallBgUrl});
      bakground-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
    @media (pointer: coarse) {
      background-size: contain;
      background-repeat: no-repeat;
    }
  `;

  return (
    <StyledDiv>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.8)', height: height }} />
    </StyledDiv>
  );
};

export default DecoParallax;
