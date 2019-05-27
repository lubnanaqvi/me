import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
const ProjectLink = props => {
  const grid = props.grid;
  const StyledDiv = styled.div`
    grid-column: ${grid.gridCol} / span ${grid.spanCol};
    grid-row: ${grid.gridRow} / span ${grid.spanRow};
    cursor: pointer;
    color: #ff6f61;
    text-align: center;
    font-size: ${props.projectData.fontsize};
    &:hover {
      background-color: #1c2f3b;
    }
    @media (max-width: 920px) {
      grid-row: ${grid.gridRow} / span ${grid.spanRow - 1};
      grid-column: ${grid.gridCol} / span ${parseInt(grid.spanCol) + 1};
      font-size: ${parseInt(props.projectData.fontsize) + 'em'};
    }
  `;
  const StyledTitle = styled.span`
    position: relative;
    top: -20%;
    left: -35%;
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
