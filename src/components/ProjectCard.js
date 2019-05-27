import React from 'react';
import ProjectHeading from './ProjectHeading';
import ProjectDesc from './ProjectDesc';
import ProjectTech from './ProjectTech';
import styled from 'styled-components';
import ViewProject from './ViewProject';

const ProjectCard = ({ projectData, openedProject }) => {
  const { title, desc, tech, link, pic, id } = projectData;
  const StyledProjectCard = styled.div`
    display: ${id === openedProject ? 'block' : 'none'};
    width: 700px;
    height: 400px;
    position: absolute;
    top: 20%;
    left: 0%;
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
      top: ${10 + parseInt(id) + '%'};
    }
  `;
  return (
    <StyledProjectCard>
      <ProjectHeading title={title} />
      <ProjectDesc desc={desc} />
      <ProjectTech tech={tech} />
      <ViewProject link={link} pic={pic} />
    </StyledProjectCard>
  );
};
export default ProjectCard;
