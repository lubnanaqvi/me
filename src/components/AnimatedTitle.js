import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 2em;
  cursor: pointer;
  background-color: #174a45;
  color: white;
  width: 800px;
  margin: auto;
  text-align: left;
  transition: transform 1s linear;
  border: solid 1px black;
  @media (max-width: 850px) {
    box-sizing: border-box;
    width: 100% !important;
    margin: auto;
    transition: none !important;
    transform: none !important;
  }
`;
const HeadingHolder = styled.div`
  width: 95%;
  margin: auto;
  &:hover #h {
    transform: rotate(-90deg) translate(-270px, -425px);
    width: 500px;
  }
`;
const AnimatedTitle = ({ title }) => (
  <HeadingHolder>
    <StyledDiv id="h">{title}</StyledDiv>
  </HeadingHolder>
);
export default AnimatedTitle;
