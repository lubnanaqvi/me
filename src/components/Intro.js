import React from 'react';
import styled from 'styled-components';
import codepic from '../coding.jpg';
const Intro = () => {
  const StyledDiv = styled.div`
    height: 300px
    background-color: white;
    position:relative;
    top:130px;
    text-align:center;
    padding-bottom:100px;
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
    @media( max-width:470px){
      height:200px;
      &::after{
        transform:skewY(15deg);
      }
    }
  `;
  const StyledIntro = styled.p`
    display: inline-block;
    width: 45%;
    margin: auto;
    vertical-align: middle;
    text-align: left;
    color: rgb(65, 43, 25);
    font-size: 1.5em;
    @media (max-width: 600px) {
      display: block;
      width: 70%;
    }
  `;
  const StyledImg = styled.img`
    display: inline-block;
    width: 300px;
    margin: auto;
    vertical-align: middle;
    @media (max-width: 600px) {
      height: 100px;
      width: auto;
      display: block;
    }
  `;
  return (
    <StyledDiv>
      <StyledImg src={codepic} />
      <StyledIntro>
        Hi, I am Lubna. I am a front end &#123;web&#125; developer based in
        Kitchener. Check out my projects in the portfolio section.
      </StyledIntro>
    </StyledDiv>
  );
};
export default Intro;
