import "./section1/SectionOne.css";
import Input from "./input/Input";

const SectionOne = () => {
  return (
    <section className="container section1">
      <h2>Unlimited movies, TV shows, and more</h2>
      <p>Watch anywhere. Cancel anytime.</p>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <Input placeholder="Email address" />
    </section>
  );
};

export default SectionOne;
