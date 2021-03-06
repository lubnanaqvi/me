import React from "react";
import styled from "styled-components";
import projects from "../projects.json";
import ProjectLink from "./ProjectLink";
import AnimatedTitle from "./AnimatedTitle";
import RotatedTitle from "./RotatedTitle";
class ProjectGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedProject: "-1",
    };
  }
  handleClick = (e) => {
    this.setState({ openedProject: e.target.id });
  };
  render() {
    const projectsList = projects.map((p, i) => {
      return (
        <ProjectLink
          projectData={p}
          key={i}
          handleProjectClick={this.handleClick.bind(this)}
          openedProject={this.state.openedProject}
        />
      );
    });

    const StyledGrid = styled.div`
      width: 700px;
      height: 500px;
      margin: auto;
      display: grid;
      position: relative;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-gap: 1em;
      color: white;
      @media (max-width: 720px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(10, 7em);
        height: 1200px;
        width: 80%;
        margin: auto;
        font-size: 1em;
      }
    `;
    const StyledDiv = styled.div`
      background-color: white;
      position: relative;
      top: -100px;
      padding-top: 150px;
      &::before {
        content: "";
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
      <StyledDiv id="portfolio" onClick={this.handleClick.bind(this)}>
        <AnimatedTitle title="portfolio-" />
        <RotatedTitle title="portfolio-" />
        <StyledGrid>{projectsList}</StyledGrid>
      </StyledDiv>
    );
  }
}
export default ProjectGrid;
