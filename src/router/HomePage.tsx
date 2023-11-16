import hero from "../../public/assets/home/desktop/image-hero-phone.png";
import arrowIcon from "../../public/assets/shared/desktop/icon-right-arrow.svg";

import webDesignDesktop from "../../public/assets/home/desktop/image-web-design-large.jpg";
import webDesignTablet from "../../public/assets/home/tablet/image-web-design.jpg";
import webDesignMobile from "../../public/assets/home/mobile/image-web-design.jpg";

import appDesignDesktop from "../../public/assets/home/desktop/image-app-design.jpg";
import appDesignTablet from "../../public/assets/home/tablet/image-app-design.jpg";
import appDesignMobile from "../../public/assets/home/mobile/image-app-design.jpg";

import graphicDesignDesktop from "../../public/assets/home/desktop/image-graphic-design.jpg";
import graphicDesignTablet from "../../public/assets/home/tablet/image-graphic-design.jpg";
import graphicDesignMobile from "../../public/assets/home/mobile/image-graphic-design.jpg";

import passionateImage from "../../public/assets/home/desktop/illustration-passionate.svg";
import resourcefulImage from "../../public/assets/home/desktop/illustration-resourceful.svg";
import friendlyImage from "../../public/assets/home/desktop/illustration-friendly.svg";

import PageFooter from "../components/PageFooter";
import { HashLink } from "react-router-hash-link";

const HomePage = () => {
  return (
    <div className="home-container container">
      <div className="home-hero flex bg-peach ">
        <div className="col col-right flow">
          <h1 className="h1 txt-white">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="txt-white">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
        <div className="col">
          <img className="hero-img" src={hero} />
        </div>
      </div>

      <div className="home-designs-container grid ">
        <div className="design-single flex">
          <div className="design-single-bg-container">
            <picture className="design-single-bg">
              <source media="(min-width:55em)" srcSet={webDesignDesktop} />
              <source media="(min-width:45em)" srcSet={webDesignTablet} />
              <img src={webDesignMobile} />
            </picture>
          </div>

          <h2 className="h2 uppercase txt-white">Web Design</h2>
          <HashLink
            to="/design/web#header"
            className="flex home-design-cta-container underline-animate"
          >
            <p className="fs-500 uppercase txt-white letter-spacing-1">
              View Projects
            </p>
            <img src={arrowIcon} />
          </HashLink>
        </div>
        <div className="design-single flex">
          <div className="design-single-bg-container">
            <picture className="design-single-bg">
              <source media="(min-width:55em)" srcSet={appDesignDesktop} />
              <source media="(min-width:45em)" srcSet={appDesignTablet} />
              <img src={appDesignMobile} />
            </picture>
          </div>

          <h2 className="h2 uppercase txt-white">App Design</h2>
          <HashLink
            to="/design/app#header"
            className="flex home-design-cta-container underline-animate"
          >
            <p className="fs-500 uppercase txt-white letter-spacing-1">
              View Projects
            </p>
            <img src={arrowIcon} />
          </HashLink>
        </div>
        <div className="design-single flex">
          <div className="design-single-bg-container">
            <picture className="design-single-bg">
              <source media="(min-width:55em)" srcSet={graphicDesignDesktop} />
              <source media="(min-width:45em)" srcSet={graphicDesignTablet} />
              <img src={graphicDesignMobile} />
            </picture>
          </div>

          <h2 className="h2 uppercase txt-white">Graphic Design</h2>
          <HashLink
            to="/design/graphic#header"
            className="flex home-design-cta-container underline-animate"
          >
            <p className="fs-500 uppercase txt-white letter-spacing-1">
              View Projects
            </p>
            <img src={arrowIcon} />
          </HashLink>
        </div>
      </div>

      <div className="illustrations-container flex">
        <div className="illustration-single flex">
          <div className="illustration-img-container">
            <img src={passionateImage} />
          </div>
          <div className="illustration-content flow">
            <h3 className="h3 fw-semi-bold uppercase txt-dark-grey ">
              Passionate
            </h3>
            <p>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        <div className="illustration-single flex">
          <div className="illustration-img-container">
            <img src={resourcefulImage} />
          </div>
          <div className="illustration-content flow">
            <h3 className="h3 fw-semi-bold uppercase txt-dark-grey ">
              Resourceful
            </h3>
            <p>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div className="illustration-single flex">
          <div className="illustration-img-container">
            <img src={friendlyImage} />
          </div>
          <div className="illustration-content flow">
            <h3 className="h3 fw-semi-bold uppercase txt-dark-grey ">
              Friendly
            </h3>
            <p>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
};

export default HomePage;
