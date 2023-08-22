import TvImage from "./TvImage";
import Text1 from "./Text1";
import "./SectionOne.css";

function SectionOne() {
  return (
    <>
      <div className="border-b-4 border-gray-700">
        <div className="py-20 container mx-auto pl-20 flex gap-4 containerInput">
          <Text1
            heading="Enjoy on your TV"
            text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          />
          <TvImage />
        </div>
      </div>
    </>
  );
}

export default SectionOne;
