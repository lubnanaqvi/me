import React from 'react';
import styled from 'styled-components';
const ProjectHeading = ({ title }) => {
  const StyledHeading = styled.h2`
    transform: rotate(-90deg);
    position: relative;
    top: 100px;
    left: -180px;
    color: black;
    font-size: 2em;
    text-align: left;
    padding-left: 2%;
    background-color: #ff6f61;
    border: solid 1px black;
    color: white;
    width: 300px;
    @media (max-width: 850px) {
      font-size: 1.5em;
      top: 180px;
      left: -70%;
    }
  `;
  return <StyledHeading>{title}</StyledHeading>;
};
export default ProjectHeading;
