import logo from "./Netflix-Symbol.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header container d-flex justify-content-between align-items-center py-3">
      <div className="logo">
        <img src={logo} alt="netflix" className="n-logo" />
      </div>
      <div className="nav gap-3">
        <div className="select">
          <select className="form-select form-select-sm text-center bg-dark text-white">
            <option className="bg-white" value="Lithuanian">
              English
            </option>
            <option value="Lithuanian">Lithuanian</option>
          </select>
        </div>
        <button className="btn btn-danger btn-sm">Sign in</button>
      </div>
    </div>
  );
};

export default Header;
