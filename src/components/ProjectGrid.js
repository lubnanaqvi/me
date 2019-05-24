import React from 'react';
import styled from 'styled-components';
import projects from '../projects.json';
import ProjectLink from './ProjectLink';
import gridLayout from '../gridLayout.json';
import AnimatedTitle from './AnimatedTitle';

const ProjectGrid = () => {
  const projectsList = projects.map((p, i) => {
    // if (p.title === 'Me') return <AnimatedName grid={gridLayout[i]} />;
    return <ProjectLink projectData={p} key={i} grid={gridLayout[i]} />;
  });

  const StyledGrid = styled.div`
    height: 500px;
    width: 800px;
    margin: auto;
    display: grid;
    position: relative;
    border: solid 1px black;
    grid-template-columns: 1fr 35px 1fr 1fr 1fr 20px 20px 1fr 1fr 1fr;
    grid-template-rows: 1fr 25px 1fr 1fr 1fr 20px 1fr 15px 1fr 30px;
    background-color: #ff6f61;
    color: white;
    @media (max-width: 825px) {
      width: 95%;
      margin: auto;
    }
  `;
  const StyledDiv = styled.div`
    background-color: white;
    position: relative;
    text-align: center;
    padding-top: 100px;
    &::before {
      content: '';
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: skewY(5deg);
      transform-origin: 100%;
      z-index: -1;
    }
  `;
  return (
    <StyledDiv id="portfolio">
      <AnimatedTitle title="portfolio-" />
      <StyledGrid>{projectsList}</StyledGrid>
    </StyledDiv>
  );
};
export default ProjectGrid;
