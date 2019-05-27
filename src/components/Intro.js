import React from 'react';
import styled from 'styled-components';
import laptop from '../laptop.jpg';
import laptopSmall from '../laptop_small.jpg';
const Intro = () => {
  const StyledDiv = styled.div`
    height: 300px
    background-color:white ;
    position:relative;
    top:200px;
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
  const ColorBlock = styled.div`
    background-color: #1c2f3b;
    display: inline-block;
    width: 60%;
    margin: auto;
    vertical-align: middle;
    height: 300px;
    @media (max-width: 600px) {
      width: 50%;
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
    @media (max-width: 600px) {
      display: block;
      width: 70%;
      font-size: 1.2em;
    }
  `;
  const StyledImg = styled.div`
background:url(${laptop});
background-size:cover;
background-repeat:no-repeat;
    display: inline-block;
    width: 250px;
    height:200px;
    position: relative;
    left: 5%;
    filter:grayscale(30%);
    vertical-align: middle;
    @media (max-width: 600px) {
      background:url(${laptopSmall});
      background-size:contain;
      background-repeat:no-repeat;
      width:35%
      height: 100px;
      left:5%;
      top:-10%;
    }
  `;
  return (
    <StyledDiv>
      <StyledImg />
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
