import React from "react";
import styled from "styled-components";
import icons from "../iconpaths.json";
import SVGIcon from "./SVGIcon";
const Header = () => {
  // const iconsList = icons.map((icon, i) => {
  //   return (
  //     <SVGIcon
  //       key={i}
  //       link={icon.link}
  //       iconName={icon.name}
  //       paths={icon.paths}
  //     />
  //   );
  // });
  const StyledHeader = styled.div`
    color: white;
    position: absolute;
    padding: 0.25em;
    font-size: 1.3em;
    top: 1.5em;
    right: 1.5em;
    z-index: 1000 !important;
    border-bottom: solid 1px transparent;
    transition: border-color 2s linear;
    &:hover {
      border-color: white;
    }
    @media (max-width: 720px) {
      font-size: 0.9em;
      top: 1em;
      right: 1em;
      border-color: white;
    }
  `;
  const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;
  `;
  return (
    <StyledHeader>
      <StyledLink href="#portfolio">Portfolio</StyledLink>
    </StyledHeader>
  );
};

export default Header;
