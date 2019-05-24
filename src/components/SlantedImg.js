import React from 'react';

import styled from 'styled-components';

const SlantedImg = ({ bgUrl, smallBgUrl }) => {
  const StyledDiv = styled.div`
    position: relative;
    top: 100px;
    z-index: -2;
    background-color: black;
    background: url(${bgUrl});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
    width: 100%;
    margin: 100px auto;
    @media (max-width: 825px) {
      width: 95%;
      background: url(${smallBgUrl});
      bakground-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
    @media (pointer: coarse) {
      background-attachment: scroll;
    }
  `;

  return <StyledDiv />;
};

export default SlantedImg;
