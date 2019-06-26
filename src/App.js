import React from 'react';
import ProjectGrid from './components/ProjectGrid';
import './App.css';
import Home from './components/Home';
import pimg from './web.jpg';
import spimg from './web_small.jpg';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import SlantedImg from './components/SlantedImg';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Intro />
      <SlantedImg bgUrl={pimg} smallBgUrl={spimg} />
      <ProjectGrid />
      <Footer />
    </div>
  );
};

export default App;
/*
-add cv  
-remove unnecessary stuff i.e. code cleanup
-add side nav bar
*/
