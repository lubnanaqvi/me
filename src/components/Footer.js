import React from "react";
import styled from "styled-components";
import AnimatedCircle from "./AnimatedCircle";
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
    position: absolute;
    z-index: 5;
    color: #ff938a;
    font-size: 1.3em;
    text-align: center;
    width: 98%;
    margin-left: 1%;
    @media (max-width: 720px) {
      font-size: 1.1em;
      margin-top: -2em;
    }
  `;
  const StyledDiv = styled.div`
    background-color: #44443d;
    position: relative;
    padding: 5em 0 3em 0;
    @media (max-width: 720px) {
      padding: 5em 0;
    }
  `;
  const randomGen = (x) => {
    return Math.random() * x;
  };
  const SpacerDiv = styled.div`
    height: 100px;
  `;
  const a = [];
  for (var i = 0; i < 25; i++)
    a[i] = {
      ax: parseInt(Math.random() * 100),
      ay: parseInt(Math.random() * 100),
      bx: 80,
    };
  const animatedCircles = a.map((l, i) => {
    return (
      <AnimatedCircle
        index={i}
        key={i}
        coords={a[i]}
        rotated={randomGen(360)}
        radius={randomGen(50) + 150}
        delay={randomGen(5)}
        anti={randomGen(2) > 1}
      />
    );
  });
  return (
    <footer>
      <ForegroundDiv>
        <SpacerDiv />
        Interested in building something together?
        <br />
        <br />
        <StyledLink href="mailto:lubnanaqvi11@gmail.com">Email me</StyledLink>
        <br />
        <br />
        &copy; 2020 Lubna Naqvi - {iconsList}
      </ForegroundDiv>
      <StyledDiv>{animatedCircles}</StyledDiv>
    </footer>
  );
};
export default Footer;
