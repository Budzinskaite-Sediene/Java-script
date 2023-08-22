import "./Footer.css";

const Footer = () => {
  const footerData1 = [
    "FAQ",
    "Media Center",
    "Ways toWatch",
    "Cookie Preferences",
    "Speed Test",
    "Only on Netflix",
  ];
  const footerData2 = [
    "Help Center",
    "Ivestor Relations",
    "Terms of Use",
    "Corporate Information",
    "Legal Guarantee",
    "Ad Choices",
  ];
  const footerData3 = [
    "Account",
    "Jobs",
    "Privacy",
    "Contact Us",
    "Legal Notices",
  ];
  return (
    <div className="footer section" style={{ height: 500 }}>
      <div className="container">
        <h6>
          <a href="/">Questions? Contact us</a>
        </h6>
        <div className="d-flex">
          <ul className="col-4">
            {footerData1.map((el) => {
              return (
                <li>
                  <a href="/">{el}</a>
                </li>
              );
            })}
          </ul>
          <div className="col-4">
            {footerData2.map((el) => {
              return (
                <li>
                  <a href="/">{el}</a>
                </li>
              );
            })}
          </div>
          <div className="col-4">
            {footerData3.map((el) => {
              return (
                <li>
                  <a href="/">{el}</a>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
