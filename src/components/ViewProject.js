import React from 'react';
import styled from 'styled-components';
const ViewProject = ({ link }) => {
  const StyledLink = styled.a`
    border: solid 1px black;
    padding: 1%;
    color: black;
    text-decoration: none;
    display: block;
    width: 200px;
    margin: auto;
    text-align: center;
    &:hover {
      background-color: black;
      color: white;
    }
  `;
  return link ? <StyledLink href={link}>View Project</StyledLink> : null;
};
export default ViewProject;
