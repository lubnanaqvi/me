import React from "react";
import ProjectHeading from "./ProjectHeading";
import ProjectDesc from "./ProjectDesc";
import ProjectTech from "./ProjectTech";
import styled from "styled-components";
import ViewProject from "./ViewProject";

const ProjectCard = ({ projectData, openedProject }) => {
  const { title, desc, tech, link, pic, id } = projectData;
  const StyledProjectCard = styled.div`
    display: ${id === openedProject ? "block" : "none"};
    width: 700px;
    height: 400px;
    position: absolute;
    top: 20%;
    left: 5%;
    background-color: white;
    color: black;
    border: solid 1px black;
    box-sizing: border-box;
    padding: 2%;
    padding-bottom: 50px;
    font-size: 1rem;
    z-index: 100 !important;
    @media (max-width: 850px) {
      width: 90% !important;
      margin: 0;
      min-height: 400px;
      height: auto;
      top: ${7 * parseInt(id) + "em"};
    }
  `;
  const StyledCloseButton = styled.span`
    border: solid 1px black;
    padding: 1%;
    color: black;
    text-decoration: none;
    display: inline-block;
    width: 200px;
    margin: 5% auto 5% 2%;
    text-align: center;
    &:hover {
      background-color: black;
      color: white;
    }
    @media and (max-width: 720px) {
      display: block;
      margin: auto;
    }
  `;
  return (
    <StyledProjectCard>
      <ProjectHeading title={title} />
      <ProjectDesc desc={desc} />
      <ProjectTech tech={tech} />
      <ViewProject link={link} pic={pic} />
      <StyledCloseButton>Close</StyledCloseButton>
    </StyledProjectCard>
  );
};
export default ProjectCard;
