import "./App.css";
import HeroBanner from "./components/heroBanner/HeroBanner";
// import SectionOne from "./components/sectionOne/SectionOne";
// import SectionTwo from "./components/section2/SectionTwo";
// import SectionThree from "./components/section3/SectionThree";
// import SectionKids from "./components/sectionKids/SectionKids";
// import Tabs from "./components/tabs/Tabs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <HeroBanner />
        {/* <SectionTwo />
        <SectionThree />
        <SectionKids />
        <Tabs /> */}
        {/* <SectionOne /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
