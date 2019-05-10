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
    @media (max-width: ${width}) {
      width: 100%;
      background: url(${smallBgUrl});
      bakground-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
  `;

  return <StyledDiv />;
};

export default DecoParallax;
