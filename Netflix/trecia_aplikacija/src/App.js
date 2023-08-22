import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SectionOne from "./components/section1/SectionOne";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Hero />
        <SectionOne />
        <Footer />
      </div>
    </>
  );
}

export default App;
