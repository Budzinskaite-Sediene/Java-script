import "./SectionTwo.css";
import image from "./tv.png";
const SectionTwo = () => {
  return (
    <>
      <div className="containerTwo">
        <div className="containerFirstSection">
          <h1 className="firstTitle"> Enjoy on your TV</h1>
          <p className="enjoyP">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div>
          <img src={image} alt="image" />
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
