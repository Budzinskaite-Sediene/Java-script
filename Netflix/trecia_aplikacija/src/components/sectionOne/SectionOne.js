import "./SectionOne.css";

const SectionOne = () => {
  return (
    <div className="getStartedContainer">
      <p className="readyToWatch">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form id="emailInput">
        <input
          type="email"
          placeholder="Email address"
          className="customizedInput"
        />
        <button className="getStartedButton">Get Started {"  >"}</button>
      </form>
    </div>
  );
};

export default SectionOne;
