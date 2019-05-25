import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;
    padding: 0.8%;
    border: solid 1.2px white;
    font-style: normal;
    &:hover {
      background-color: white;
      color: white;
    }
  `;
  const StyledDiv = styled.div`
    background-color: black;
    background-image: linear-gradient(to right, #280e04, #563012, #80522b);
    color: white;
    position: relative;
    top: 50px;
    text-align: center;
    padding: 100px 0;
    &::before {
      content: '';
      background-image: linear-gradient(to right, #280e04, #563012, #80522b);
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
  return (
    <StyledDiv>
      Interested in building something together?
      <br />
      <br />
      <StyledLink href="mailto:lubnanaqvi11@gmail.com">Email me</StyledLink>
      <br />
      <br />
      &copy; 2019 Lubna Naqvi - Front end developer &amp; UI/UX enthusiast
    </StyledDiv>
  );
};
export default Footer;

/*lets talk contact me by email or drop a line in the form at the contact page (reduxForm)*/
/*personal summary with picture*/
/*Copyright C lubna naqvi * Kitchener based web developer*/
/*Interested in building something together? Email me*/
