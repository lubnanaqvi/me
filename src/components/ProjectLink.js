import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
const ProjectLink = props => {
  const grid = props.grid;
  const StyledDiv = styled.div`
    grid-column: ${grid.gridCol} / span ${grid.spanCol};
    grid-row: ${grid.gridRow} / span ${grid.spanRow};
    cursor: pointer;
    border: solid 1px #061b28;
    background-color: #1c2f3b;
    text-align: center;
    @media (max-width: 920px) {
      grid-column: ${grid.gridCol >= 5 ? grid.gridCol - 4 : grid.gridCol} / span
        ${grid.spanCol};
      grid-row: ${grid.gridCol >= 5
          ? parseInt(grid.gridRow) + 11
          : grid.gridRow} / span ${grid.spanRow};
    }
  `;
  const StyledTitle = styled.span`
    color: white;
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
