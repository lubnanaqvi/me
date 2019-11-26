import React from "react";
import ProjectGrid from "./components/ProjectGrid";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Intro />
      <ProjectGrid />
      <Footer />
    </div>
  );
};

export default App;
