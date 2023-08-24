import "./SectionKids.css";
import image from "./kids.png";
const SectionKids = () => {
  return (
    <>
      <div className="containerTwo">
        <div>
          <img src={image} alt="image" />
        </div>
        <div className="containerSecondSection">
          <h1 className="firstTitle"> Create profiles for kids</h1>
          <p className="enjoyP">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionKids;
