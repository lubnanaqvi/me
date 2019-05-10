import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
class ProjectLink extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isProjectDetailOpen: false
    };
  }
  handleClick = e => {
    const toggleProjectDetail = !this.state.isProjectDetailOpen;
    this.setState({ isProjectDetailOpen: toggleProjectDetail });
  };
  render() {
    const grid = this.props.grid;
    const StyledDiv = styled.div`
      grid-column: ${grid.gridCol} / span ${grid.spanCol};
      grid-row: ${grid.gridRow} / span ${grid.spanRow};
    `;

    const StyledTitle = styled.h4`
      cursor: pointer;
      font-family: Helvetica, sans-serif;
      transition: transform 0.5s linear;
      &:hover {
        transform: rotate(-90deg);
      }
    `;

    return (
      <StyledDiv onClick={this.handleClick}>
        <StyledTitle>{this.props.projectData.title}</StyledTitle>
        <ProjectCard
          projectData={this.props.projectData}
          isProjectDetailOpen={this.state.isProjectDetailOpen}
        />
      </StyledDiv>
    );
  }
}
export default ProjectLink;
