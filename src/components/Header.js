import React from 'react';
import styled from 'styled-components';
import icons from '../iconpaths.json';
import SVGIcon from './SVGIcon';
const Header = () => {
  const iconsList = icons.map((icon, i) => {
    return (
      <SVGIcon
        key={i}
        link={icon.link}
        iconName={icon.name}
        paths={icon.paths}
      />
    );
  });
  const StyledHeader = styled.div`
    width: 95%;
    margin: auto;
    text-align: right;
    color: rgba(255, 255, 255, 0.9);
    position: fixed;
    z-index: 1000 !important;
  `;

  return <StyledHeader>{iconsList}</StyledHeader>;
};

export default Header;
