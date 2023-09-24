import { useState } from "react";
import Layout from "./components/Layout/Layout";
// import "./App.css";
import About from "./sections/About";
import DownArrowButton from "./components/DownArrow";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education_Section from "./sections/Education_Section";
import Contact_Section from "./sections/Contact_Section";
function App() {
  return (
    <>
      <Layout>
        <About />
        <DownArrowButton />
        <Skills />
        <Projects />
        <Education_Section />
        <Contact_Section />
      </Layout>
    </>
  );
}

export default App;
