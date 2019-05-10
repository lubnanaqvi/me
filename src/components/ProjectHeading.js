import React from 'react';
import styled from 'styled-components';
const ProjectHeading = ({ title }) => {
  const StyledHeading = styled.h2`
    transform: rotate(-90deg);
    position: relative;
    top: 0px;
    left: -370px;
    color: white;
    @media (max-width: 800px) {
      top: 50%;
      left: -57%;
    }
  `;
  return <StyledHeading>{title}</StyledHeading>;
};
export default ProjectHeading;
