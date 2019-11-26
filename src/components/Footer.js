import React from "react";
import styled from "styled-components";
import AnimatedCircle from "./AnimatedCircle";
const Footer = () => {
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
    padding-top: 100px;
    z-index: 5;
    color: #ff938a;
    font-size: 1.3em;
    text-align: center;
    width: 98%;
    margin: 1%;
    padding-top: 200px;
    @media (max-width: 800px) {
      padding-top:100px
      font-size: 1.1em;
    }
  `;
  const StyledDiv = styled.div`
    background-color: #44443d;
    position: relative;
    top: 50px;
    padding: 50px 0 100px 0;
  `;
  const randomGen = x => {
    return Math.random() * x;
  };
  const a = [];
  for (var i = 0; i < 25; i++)
    a[i] = {
      ax: parseInt(Math.random() * 100),
      ay: parseInt(Math.random() * 100),
      bx: 80
    };
  const animatedLines = a.map((l, i) => {
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
        Interested in building something together?
        <br />
        <br />
        <StyledLink href="mailto:lubnanaqvi11@gmail.com">Email me</StyledLink>
        <br />
        <br />
        &copy; 2019 Lubna Naqvi - Front end developer
      </ForegroundDiv>
      <StyledDiv>{animatedLines}</StyledDiv>
    </footer>
  );
};
export default Footer;
