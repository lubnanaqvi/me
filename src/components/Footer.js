import React from "react";
import styled from "styled-components";
import Bubble from "./Bubble";
import icons from "../iconpaths.json";
import SVGIcon from "./SVGIcon";
const Footer = () => {
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
  const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;
    padding: 0.8%;
    border: solid 1.2px #ff938a;
    font-style: normal;
    &:hover {
      background-color: white;
      color: black;
    }
  `;
  const ForegroundDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 15;
    color: #ff938a;
    font-size: 1.3em;
    text-align: center;
    height: 250px;
    width: 100%;
    padding-top: 50px;
    @media (max-width: 720px) {
      font-size: 0.8em;
    }
  `;
  const StyledFooter = styled.footer`
    background-color: #44443d;
    height: 300px;
    position: relative;
  `;
  const a = [];
  const ww = window.innerWidth;
  for (var i = 0; i < 25; i++)
    a[i] = {
      ax: parseInt(Math.random() * ww) - 50,
      ay: parseInt(Math.random() * 250),
      bx: parseInt(Math.random() * ww) - 50,
      by: parseInt(Math.random() * 250),
    };
  const animatedCircles = a.map((l, i) => {
    return <Bubble key={i} fromX={l.ax} fromY={l.ay} toX={l.bx} toY={l.by} />;
  });
  return (
    <StyledFooter>
      <ForegroundDiv>
        Interested in building something together?
        <br />
        <br />
        <StyledLink href="mailto:lubnanaqvi11@gmail.com">Email me</StyledLink>
        <br />
        <br />
        &copy; {new Date().getFullYear()} Lubna Naqvi - {iconsList}
      </ForegroundDiv>
      {animatedCircles}
    </StyledFooter>
  );
};
export default Footer;
