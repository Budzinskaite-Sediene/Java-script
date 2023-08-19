import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Video from "./components/video/Video";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      {}
      <Video
        classes="videContainer"
        videoID="kucgOFzxlkM"
        autoplay={true}
        colour="red"
        controls={true}
        start={false}
        end={false}
        loop={true}
      />
      <Video
        videoID=""
        autoplay={false}
        colour="black"
        controls={false}
        start={false}
        end={false}
        loop={false}
        thumbnail="https://picsum.photos/200/300?grayscale"
      />
      <Footer />
    </div>
  );
};

export default App;
