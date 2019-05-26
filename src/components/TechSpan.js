import React from 'react';
import styled from 'styled-components';
const TechSpan = ({ name }) => {
  const StyledSpan = styled.span`
    background-color: #ff6f61;
    color: white;
    padding: 1%;
    border: solid 1px black;
    margin: 1%;
    display: inline-block;
  `;
  return <StyledSpan>{name}</StyledSpan>;
};
export default TechSpan;
