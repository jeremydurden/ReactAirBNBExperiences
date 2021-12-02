import logo from "../Images/airbnb 1.svg";

function Navbar() {
  return (
    <div className="nav--container">
      <img src={logo} alt="air-bnb-logo" className="nav--logo" />
    </div>
  );
}

export default Navbar;
