import React from "react";
import styled from "styled-components";
import Pdf from "../CV2019.pdf";
const SVGIcon = ({ link, iconName, paths }) => {
  const svgPath = paths.map((p, i) => {
    return <path d={p} key={i} />;
  });
  const StyledIcon = styled.svg`
    display: inline-block;
    width: 1em;
    height: 1em;
    margin: auto;
    stroke: #174a45;
    fill: transparent;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    padding: 0.3em 0.3em 0 0.3em;
  `;
  const StyledLink = styled.a`
    color: inherit;
  `;
  return (
    <StyledLink href={link ? link : Pdf} target={link ? "_self" : "_blank"}>
      <StyledIcon className={`icon icon-${iconName}`}>
        <use xlinkHref={`#icon-${iconName}`} />
        <defs>
          <symbol id={`icon-${iconName}`} viewBox="0 0 32 32">
            <title>{iconName}</title>
            {svgPath}
          </symbol>
        </defs>
      </StyledIcon>
    </StyledLink>
  );
};
export default SVGIcon;
