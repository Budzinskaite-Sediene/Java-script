import "./SectionThree.css";
import image from "./3.jpg";
const SectionThree = () => {
  return (
    <>
      <div className="containerTwo">
        <div>
          <img src={image} alt="image" />
        </div>
        <div className="containerSecondSection">
          <h1 className="firstTitle"> Download your shows to watch offline</h1>
          <p className="enjoyP">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
