import "./EnjoySection.css";
import image from "./device-pile.png";
const EnjoySection = () => {
  return (
    <>
      <div className="containerTwo">
        <div className="containerFirstSection">
          <h1 className="firstTitle"> Watch everywhere</h1>
          <p className="enjoyP">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div>
          <img src={image} alt="image" />
        </div>
      </div>
    </>
  );
};

export default EnjoySection;
