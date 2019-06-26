import React from 'react';
import styled from 'styled-components';
import AnimatedCircle from './AnimatedCircle';
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
  const BackgroundDiv = styled.div`
    position: absolute;
    padding-top: 100px;
    z-index: 5;
    color: #ff938a;
    font-size: 1.3em;
    text-align: center;
    width: 100%;
    padding-top: 200px;
  `;
  const StyledDiv = styled.div`
    background-color: #44443d;

    position: relative;
    top: 50px;

    padding: 100px 0;
    &::before {
      content: '';
      background-color: #44443d;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: skewY(5deg);
      transform-origin: 100%;
      z-index: -1;
    }
    @media (max-width: 470px) {
      &::before {
        transform: skewY(15deg);
      }
    }
  `;
  const randomGen = x => {
    return Math.random() * x;
  };
  const a = [];
  for (var i = 0; i < 16; i++)
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
        radius={randomGen(50) + 100}
        delay={randomGen(5)}
        anti={randomGen(2) > 1}
      />
    );
  });
  return (
    <footer>
      <BackgroundDiv>
        {' '}
        Interested in building something together?
        <br />
        <br />
        <StyledLink href="mailto:lubnanaqvi11@gmail.com">Email me</StyledLink>
        <br />
        <br />
        &copy; 2019 Lubna Naqvi - Front end developer &amp; UI/UX enthusiast
      </BackgroundDiv>
      <StyledDiv>{animatedLines}</StyledDiv>
    </footer>
  );
};
export default Footer;

/*lets talk contact me by email or drop a line in the form at the contact page (reduxForm)*/
/*personal summary with picture*/
/*Copyright C lubna naqvi * Kitchener based web developer*/
/*Interested in building something together? Email me*/
//#280e04, #563012, #80522b
