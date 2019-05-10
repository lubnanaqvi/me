import React from 'react';
import ProjectHeading from './ProjectHeading';
import ProjectDesc from './ProjectDesc';
import ProjectTech from './ProjectTech';
import styled from 'styled-components';
import ViewProject from './ViewProject';

const ProjectCard = ({ projectData, isProjectDetailOpen }) => {
  const { title, desc, tech, link } = projectData;
  const StyledProjectCard = styled.div`
    display: ${isProjectDetailOpen ? 'block' : 'none'};
    width: 700px;
    height: 400px;
    position: absolute;
    top: 10%;
    left: 10%;
    background-color: white;
    color: black;
    border: solid 1px black;
    box-sizing: border-box;
    padding: 2%;
    @media (max-width: 800px) {
      width: 85% !important;
      margin: 0;
      min-height: 400px;
      height: auto;
    }
  `;
  return (
    <StyledProjectCard>
      <ProjectHeading title={title} />
      <ProjectDesc desc={desc} />
      <ProjectTech tech={tech} />
      <ViewProject link={link} />
    </StyledProjectCard>
  );
};
export default ProjectCard;
