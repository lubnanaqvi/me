import React from "react";
import styled from "styled-components";
const Intro = () => {
  const StyledDiv = styled.div`
    height: 350px
    background-color:white ;
    text-align:center;
    padding-bottom:50px;
    padding-top:100px;
    @media (max-width:800px){
      padding-bottom:200px;
    }
    @media( max-width:470px){
      height:200px;
    }
  `;
  const ColorBlock = styled.div`
    background-color: #44443d;
    display: inline-block;
    width: 60%;
    margin: auto;
    vertical-align: middle;
    height: 300px;
    @media (max-width: 800px) {
      width: 70%;
      height: auto;
      padding: 5% 0;
    }
  `;
  const StyledIntro = styled.p`
    width: 80%;
    margin: 10% auto;
    text-align: left;
    color: white;
    font-size: 1.5em;
    @media (max-width: 800px) {
      display: block;
      width: 70%;
      font-size: 1.2em;
    }
  `;
  const Styledheading = styled.span`
    color: #ff6f61;
    position: relative;
    top: -40%;
    left: 4%;
    font-size: 4em;
    display: inline-block;
    @media (max-width: 800px) {
      top: 15%;
      text-align: left;
      display: block;
      width: 70%;
    }
  `;
  return (
    <StyledDiv>
      <Styledheading>Intro-</Styledheading>
      <ColorBlock>
        <StyledIntro>
          Hello, my name is Lubna. I am a front end developer based in
          Kitchener. Check out my projects in the portfolio section.
        </StyledIntro>
      </ColorBlock>
    </StyledDiv>
  );
};
export default Intro;
