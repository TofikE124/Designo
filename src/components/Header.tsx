import { activate } from "firebase/remote-config";
import logoDark from "../../public/assets/shared/desktop/logo-dark.png";
import Backdrop from "./Backdrop";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <>
      <header id="header" className="header container flex bg-white">
        <HashLink to="/#header" className="logo">
          <img src={logoDark} />
        </HashLink>
        <span className={`nav-bg ${navActive ? "active" : ""}`} />
        <nav className={`nav ${navActive ? "active" : ""}`}>
          <ul className="nav-list flex">
            <li>
              <HashLink
                to="/about#header"
                onClick={() => setNavActive(false)}
                className="nav-link underline-animate fs-400 txt-dark-grey uppercase"
              >
                Our Company
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/locations#header"
                onClick={() => setNavActive(false)}
                className="nav-link underline-animate fs-400 txt-dark-grey uppercase"
              >
                Locations
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/contact#header"
                onClick={() => setNavActive(false)}
                className="nav-link underline-animate fs-400 txt-dark-grey uppercase"
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>

        <button
          className={`menu-btn ${navActive ? "active" : ""}`}
          onClick={() => setNavActive(!navActive)}
        >
          <div className="menu-btn-content"></div>
        </button>
      </header>
      {navActive && <Backdrop onClick={() => setNavActive(false)} />}
    </>
  );
};

export default Header;
