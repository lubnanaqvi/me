import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  const StyledFooter = styled.div`
    width: 95%;
    margin: auto;
    text-align: center;
    padding: 5% 0;

    color: rgba(255, 255, 255, 0.9);
  `;
  const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;
    padding: 0.8%;
    border: solid 1px white;
    &:hover {
      background-color: white;
      color: #766553;
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
      &copy; 2019 Lubna Naqvi - Front end web developer &amp; UI/UX enthusiast
    </StyledFooter>
  );
};
export default Footer;

/*lets talk contact me by email or drop a line in the form at the contact page (reduxForm)*/
/*personal summary with picture*/
/*Copyright C lubna naqvi * Kitchener based web developer*/
/*Interested in building something together? Email me*/
