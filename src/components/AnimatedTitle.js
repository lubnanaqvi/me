import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 3em;
  cursor: pointer;
  color: #35586f;
  width: 800px;
  margin: auto;
  text-align: left;
  transition: transform 1s linear;
  @media (max-width: 950px) {
    box-sizing: border-box;
    width: 100% !important;
    margin: auto;
    transition: none !important;
    transform: none !important;
    text-align: center;
  }
`;
const HeadingHolder = styled.div`
  width: 95%;
  margin: auto;
  &:hover #h {
    transform: rotate(-90deg) translate(-270px, -450px);
    width: 500px;
  }
  @media (max-width: 950px) {
    display: none;
  }
`;
const AnimatedTitle = ({ title }) => (
  <HeadingHolder>
    <StyledDiv id="h">{title}</StyledDiv>
  </HeadingHolder>
);
export default AnimatedTitle;
