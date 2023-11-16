import {
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoPinterest,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

import logoLight from "../../public/assets/shared/desktop/logo-light.png";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer bg-black">
      <div className="footer-container container">
        <div className="footer-top flex">
          <HashLink to="/#header" className="logo">
            <img src={logoLight} />
          </HashLink>
          <nav className="nav">
            <ul className="nav-list flex">
              <li>
                <HashLink
                  to="/about#header"
                  className="nav-link fs-400 txt-white uppercase underline-animate"
                >
                  Our Company
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/locations#header"
                  className="nav-link fs-400 txt-white uppercase underline-animate"
                >
                  Locations
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/contact#header"
                  className="nav-link fs-400 txt-white uppercase underline-animate"
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom flex">
          <div className="footer-location">
            <p className="fw-bold">Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="footer-contact-info">
            <p className="fw-bold">Contact Us (Central Office)</p>
            <p className="fw-bold">P : +1 253-863-8967</p>
            <p className="fw-bold">M : contact@designo.co</p>
          </div>
          <div className="footer-links flex">
            <a className="footer-link">
              <BiLogoFacebookSquare />
            </a>
            <a className="footer-link">
              <BiLogoYoutube />
            </a>
            <a className="footer-link">
              <BiLogoTwitter />
            </a>
            <a className="footer-link">
              <BiLogoPinterest />
            </a>
            <a className="footer-link">
              <BiLogoInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
