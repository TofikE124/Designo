import changeImage from "../../../public/assets/graphic-design/desktop/image-change.jpg";
import boxedImage from "../../../public/assets/graphic-design/desktop/image-boxed-water.jpg";
import scienceImage from "../../../public/assets/graphic-design/desktop/image-science.jpg";

import arrowIcon from "../../../public/assets/shared/desktop/icon-right-arrow.svg";

import webDesignDesktop from "../../../public/assets/home/desktop/image-web-design-large.jpg";
import webDesignTablet from "../../../public/assets/home/tablet/image-web-design.jpg";
import webDesignMobile from "../../../public/assets/home/mobile/image-web-design.jpg";

import graphicDesignDesktop from "../../../public/assets/home/desktop/image-graphic-design.jpg";
import graphicDesignTablet from "../../../public/assets/home/tablet/image-graphic-design.jpg";
import graphicDesignMobile from "../../../public/assets/home/mobile/image-graphic-design.jpg";
import PageFooter from "../../components/PageFooter";

import { HashLink } from "react-router-hash-link";

const GraphicDesignPage = () => {
  return (
    <div className="design-page  container">
      <div className="design-page-header bg-peach bg-hero-pattern bg-hero-pattern-animate-y grid">
        <h1 className="h1 txt-white">Graphic Design</h1>
        <p className="txt-white">
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </div>
      <div className="projects-container grid ">
        <div className="project-single flex ">
          <img className="project-single-img" src={changeImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">
              Time Brown
            </h3>
            <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
          </div>
        </div>

        <div className="project-single flex ">
          <img className="project-single-img" src={boxedImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">
              Boxed Water
            </h3>
            <p>A simple packaging concept made for Boxed Water</p>
          </div>
        </div>

        <div className="project-single flex ">
          <img className="project-single-img" src={scienceImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">
              Science!
            </h3>
            <p>A poster made in collaboration with the Federal Art Project</p>
          </div>
        </div>
      </div>
      <div className="web-designs-container flex">
        <div className="design-single flex">
          <div className="design-single-bg-container">
            <picture className="design-single-bg">
              <source media="(min-width:55em)" srcSet={graphicDesignDesktop} />
              <source media="(min-width:45em)" srcSet={graphicDesignTablet} />
              <img src={graphicDesignMobile} />
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
      </div>
      <PageFooter />
    </div>
  );
};

export default GraphicDesignPage;
