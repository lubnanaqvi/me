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
      cursor: pointer;
      border: solid 1px white;
    `;

    const StyledTitle = styled.h4`
      font-family: Helvetica, sans-serif;
      text-align: center;
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
