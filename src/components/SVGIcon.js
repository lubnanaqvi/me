import React from 'react';
import styled from 'styled-components';
const SVGIcon = ({ link, iconName, paths }) => {
  const svgPath = paths.map((p, i) => {
    return <path d={p} key={i} />;
  });
  const StyledIcon = styled.svg`
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    stroke: white;
    fill: transparent;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    padding: 1%;
  `;
  const StyledLink = styled.a`
    color: inherit;
  `;
  return (
    <StyledLink href={link}>
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
