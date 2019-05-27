import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 3em;
  color: #35586f;
  display: none;
  @media (max-width: 950px) {
    display: block;
  }
`;
//   font-size: 4em;
//   cursor: pointer;
//   color: blackz;
//   width: 800px;
//   margin: auto;
//   text-align: left;
//   transition: transform 1s linear;
//   @media (max-width: 950px) {
//     box-sizing: border-box;
//     width: 100% !important;
//     margin: auto;
//     transition: none !important;
//     transform: none !important;
//     text-align: center;
//   }
// `;
// const HeadingHolder = styled.div`
//   width: 95%;
//   margin: auto;
//   &:hover #h {
//     transform: rotate(-90deg) translate(-270px, -450px);
//     width: 500px;
//   }
//   @media (max-width: 950px) {
//     display: none;
//   }
// `;
const RotatedTitle = ({ title }) => <StyledDiv>{title}</StyledDiv>;
export default RotatedTitle;
