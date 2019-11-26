import React from "react";
import AnimatedName from "./AnimatedName";
import AnimatedDecor from "./AnimatedDecor";
import path from "../tree.json";
import styled from "styled-components";
const Home = () => {
  const SpacerDiv = styled.div`
    height: 100px;
    background-color: #ff6f61;
  `;
  const StyledDiv = styled.div`
    height: 500px
    background-color: #ff6f61;
    position:relative;
   
    @media( max-width:470px){
      height:400px;
     
    }
  `;

  return (
    <div>
      <SpacerDiv />
      <StyledDiv expand>
        <AnimatedDecor pathData={path} />
        <AnimatedName />
      </StyledDiv>
    </div>
  );
};
export default Home;
