import React from "react";
import "./App.css";
import HeroBanner from "./components/heroBanner/HeroBanner";
import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import EnjoySection from "./components/enjoySection/EnjoySection";
import Accordion from "./components/accordion/Accordion";
import SectionKids from "./components/sectionKids/SectionKids";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <HeroBanner />
        <SectionTwo />
        <SectionThree />
        <EnjoySection />
        <SectionKids />
        <Accordion />
        <SectionOne />
        <Footer />
      </div>
    </>
  );
}

export default App;
