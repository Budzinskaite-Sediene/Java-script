import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SectionOne from "./components/section1/SectionOne";
import SectionTwo from "./components/section2/SectionTwo";
import SectionThree from "./components/section3/SectionThree";
import SectionKids from "./components/sectionKids/SectionKids";
import Tabs from "./components/tabs/Tabs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionKids />
        <Tabs />
        <Footer />
      </div>
    </>
  );
}

export default App;
