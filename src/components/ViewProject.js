import React from "react";
import styled from "styled-components";
import codepic from "../coding.jpg";
const ViewProject = ({ link, pic }) => {
  const StyledLink = styled.a`
    border: solid 1px black;
    padding: 1%;
    color: black;
    text-decoration: none;
    display: inline-block;
    width: 200px;
    margin: 5% 2% 5% auto;
    text-align: center;
    &:hover {
      background-color: black;
      color: white;
    }
    @media (max-width: 720px) {
      display: block;
      margin: auto;
    }
  `;
  if (link) return <StyledLink href={link}>View Project</StyledLink>;
  else if (pic) {
    const StyledImg = styled.img`
      display: block;
      width: 100px;
      height: 100px;
      margin: auto;
    `;
    return <StyledImg src={codepic} />;
  } else return null;
};
export default ViewProject;
