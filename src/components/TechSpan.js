import React from 'react';
import styled from 'styled-components';
const TechSpan = ({ name }) => {
  const StyledSpan = styled.span`
    background-color: #174a45;
    color: white;
    padding: 1%;
    border: solid 2px black;
    border-radius: 5%;
    margin: 1%;
    display: inline-block;
  `;
  return <StyledSpan>{name}</StyledSpan>;
};
export default TechSpan;
