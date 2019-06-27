import React from 'react';
import styled from 'styled-components';
const Intro = () => {
  const StyledDiv = styled.div`
    height: 350px
    background-color:white ;
    position:relative;
    top:200px;
    text-align:center;
    padding-bottom:50px;
    &::after {
      content: '';
    background-color:white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: skewY(5deg);
    transform-origin: 0%;
    z-index: -1;
    }
    @media (max-width:800px){
      padding-bottom:200px;
    }
    @media( max-width:470px){
      height:200px;
      &::after{
        transform:skewY(15deg);
      }
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
          Hello, my name is Lubna. I am a front end &#123;web&#125; developer
          based in Kitchener. Check out my projects in the portfolio section.
        </StyledIntro>
      </ColorBlock>
    </StyledDiv>
  );
};
export default Intro;
