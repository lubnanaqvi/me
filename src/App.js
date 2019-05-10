import React from 'react';
import ProjectGrid from './components/ProjectGrid';
import './App.css';
import bg from './squares.png';
import AnimatedBackGround from './components/AnimatedBackGround';
import DecoParallax from './components/DecoParallax';
import pimg from './web.jpg';
import spimg from './web_small.jpg';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <AnimatedBackGround />
      <DecoParallax
        bgUrl={pimg}
        smallBgUrl={spimg}
        height="500px"
        width="800px"
      />
      <ProjectGrid />
      <Footer />
    </div>
  );
};

export default App;
/*
-add links to projects
-deploy gitQuery
-header footer logo git and linkedin links?
-background component canvas <draw squares, write front end web developer live>
-add cv  
-replace slackD with RSVP for now
-make responsive 930px
-npm build and deploy to porfolio on github

*/
