import React from 'react';

import styled from 'styled-components';

const DecoParallax = ({ height, width, bgUrl, smallBgUrl }) => {
  const StyledDiv = styled.div`
    background: url(${bgUrl});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    height: ${height};
    width: ${width};
    margin: 100px auto;
    filter: grayscale(50%);
    @media (max-width: 825px) {
      width: 95%;
      background: url(${smallBgUrl});
      bakground-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
    @media (pointer: coarse) {
      display: none;
    }
  `;

  return <StyledDiv />;
};

export default DecoParallax;
