import logo from "../Images/airbnb 1.svg";

function Navbar() {
  return (
    <nav className="nav--container">
      <img src={logo} alt="air-bnb-logo" className="nav--logo" />
    </nav>
  );
}

export default Navbar;
