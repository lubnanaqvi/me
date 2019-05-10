import React from 'react';
import TechSpan from './TechSpan';

const ProjectTech = ({ tech }) => {
  const techList = tech
    ? tech.map((t, i) => <TechSpan name={t} key={i} />)
    : null;
  return <div>{techList}</div>;
};

export default ProjectTech;
