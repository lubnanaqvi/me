import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  const StyledFooter = styled.div`
    width: 95%;
    margin: 5% auto;
    text-align: center;
    padding: 5% 0;
    color: #174a45;
    border: solid 1px #174a45;
    font-style: italic;
    background-color: white;
  `;
  const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;
    padding: 0.8%;
    border: solid 1.2px #174a45;
    font-style: normal;
    &:hover {
      background-color: #174a45;
      color: white;
    }
  `;
  return (
    <StyledFooter>
      Interested in building something together?
      <br />
      <br />
      <StyledLink href="mailto:lubnanaqvi11@gmail.com">Email me</StyledLink>
      <br />
      <br />
      &copy; 2019 Lubna Naqvi - Front end &#123;web&#125; developer &amp; UI/UX
      enthusiast
    </StyledFooter>
  );
};
export default Footer;

/*lets talk contact me by email or drop a line in the form at the contact page (reduxForm)*/
/*personal summary with picture*/
/*Copyright C lubna naqvi * Kitchener based web developer*/
/*Interested in building something together? Email me*/
