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
    width: 90%;
    margin: 1% auto;
    text-align: right;
    background-color: rgba(65, 43, 25, 0.3);
    color: white;
    position: fixed;
    left: 5%;
    z-index: 1000 !important;
  `;

  return <StyledHeader>{iconsList}</StyledHeader>;
};

export default Header;