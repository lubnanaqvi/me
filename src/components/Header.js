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
    width: 5%;
    border-radius: 2.5px;
    background-color: rgba(65, 43, 25, 0.3);
    color: white;
    position: fixed;
    left: 95%;
    z-index: 1000 !important;
    @media (max-width: 750px) {
      width: 10%;
      left: 90%;
    }
  `;

  return <StyledHeader>{iconsList}</StyledHeader>;
};

export default Header;
