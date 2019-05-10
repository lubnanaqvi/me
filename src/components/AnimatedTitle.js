import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.div`
  font-size: 2em;
  cursor: pointer;
  background-color: #174a45;
  color: white;
  width: 800px;
  margin: auto;
  transition: transform 1s linear;
  border: solid 1px black;
  &:hover {
    transform: rotate(-90deg) translate(-270px, -425px);
    width: 500px;
  }
  @media (max-width: 800px) {
    width: 90% !important;
    margin: auto;
    transition: none !important;
    transform: none !important;
  }
`;
const AnimatedTitle = ({ title }) => <StyledSpan>{title}</StyledSpan>;
export default AnimatedTitle;
