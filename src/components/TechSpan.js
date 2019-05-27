import React from 'react';
import styled from 'styled-components';
const TechSpan = ({ name }) => {
  const StyledSpan = styled.span`
    background-color: #1c2f3b;
    color: white;
    padding: 1%;
    border: solid 1px black;
    margin: 1%;
    display: inline-block;
  `;
  return <StyledSpan>{name}</StyledSpan>;
};
export default TechSpan;
