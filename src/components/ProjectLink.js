import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
const ProjectLink = (props) => {
  const StyledDiv = styled.div`
    cursor: pointer;
    background-color: #eaeacc;
    color: #ff6f61;
    text-align: center;
    &:hover {
      background-color: #ff6f61;
      color: white;
    }
  `;
  const StyledTitle = styled.span`
    position: relative;
    font-size: 1.3em;
    font-weight: bold;
  `;
  const SpacerDiv = styled.div`
    height: 45%;
  `;
  return (
    <StyledDiv onClick={props.handleProjectClick} id={props.projectData.id}>
      <SpacerDiv />
      <StyledTitle onClick={props.handleProjectClick} id={props.projectData.id}>
        {props.projectData.title}
      </StyledTitle>
      <ProjectCard
        projectData={props.projectData}
        openedProject={props.openedProject}
      />
    </StyledDiv>
  );
};
export default ProjectLink;
