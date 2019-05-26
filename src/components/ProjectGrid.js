import React from 'react';
import styled from 'styled-components';
import projects from '../projects.json';
import ProjectLink from './ProjectLink';
import gridLayout from '../gridLayout.json';
import AnimatedTitle from './AnimatedTitle';
import RotatedTitle from './RotatedTitle';
class ProjectGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedProject: '-1'
    };
  }
  handleClick = e => {
    this.setState({ openedProject: e.target.id });
  };
  render() {
    const projectsList = projects.map((p, i) => {
      // if (p.title === 'Me') return <AnimatedName grid={gridLayout[i]} />;
      return (
        <ProjectLink
          projectData={p}
          key={i}
          grid={gridLayout[i]}
          handleProjectClick={this.handleClick.bind(this)}
          openedProject={this.state.openedProject}
        />
      );
    });

    const StyledGrid = styled.div`
      width: 800px;
      height: 500px;
      margin: auto;
      display: grid;
      position: relative;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(10, 1fr);
      padding: 2%;
      color: white;
      @media (max-width: 920px) {
        width: 80%;
        margin: auto;
        height: 1000px;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(20, 1fr);
      }
    `;
    const StyledDiv = styled.div`
      background-color: white;
      position: relative;
      top: -150px;
      padding-top: 50px;
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
      @media (max-width: 470px) {
        &::before {
          transform: skewY(15deg);
        }
      }
    `;

    return (
      <StyledDiv id="portfolio">
        <AnimatedTitle title="p o r t f o l i o -" />
        <RotatedTitle title="p o r t f o l i o -" />
        <StyledGrid>{projectsList}</StyledGrid>
      </StyledDiv>
    );
  }
}
export default ProjectGrid;
