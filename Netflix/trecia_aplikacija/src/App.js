import "./App.css";
import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import HeroText from "./components/hero/heroText";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroText />
      <Footer />
    </div>
  );
}

export default App;
