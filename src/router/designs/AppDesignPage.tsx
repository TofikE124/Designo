import arrowIcon from "../../../public/assets/shared/desktop/icon-right-arrow.svg";

import airFilterImage from "../../../public/assets/app-design/desktop/image-airfilter.jpg";
import eyeCamImage from "../../../public/assets/app-design/desktop/image-eyecam.jpg";
import faceItImage from "../../../public/assets/app-design/desktop/image-faceit.jpg";
import todoImage from "../../../public/assets/app-design/desktop/image-todo.jpg";
import loopStudiosImage from "../../../public/assets/app-design/desktop/image-loopstudios.jpg";

import webDesignDesktop from "../../../public/assets/home/desktop/image-web-design-large.jpg";
import webDesignTablet from "../../../public/assets/home/tablet/image-web-design.jpg";
import webDesignMobile from "../../../public/assets/home/mobile/image-web-design.jpg";

import graphicDesignDesktop from "../../../public/assets/home/desktop/image-graphic-design.jpg";
import graphicDesignTablet from "../../../public/assets/home/tablet/image-graphic-design.jpg";
import graphicDesignMobile from "../../../public/assets/home/mobile/image-graphic-design.jpg";

import PageFooter from "../../components/PageFooter";

import { HashLink } from "react-router-hash-link";

const AppDesignPage = () => {
  return (
    <div className="design-page  container">
      <div className="design-page-header bg-peach bg-hero-pattern bg-hero-pattern-animate-y grid">
        <h1 className="h1 txt-white">App Design</h1>
        <p className="txt-white">
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </div>
      <div className="projects-container grid ">
        <div className="project-single flex ">
          <img className="project-single-img" src={airFilterImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">
              Airfilter
            </h3>
            <p>
              Solving the problem of poor indoor air quality by filtering the
              air
            </p>
          </div>
        </div>

        <div className="project-single flex ">
          <img className="project-single-img" src={eyeCamImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">
              Eyecam
            </h3>
            <p>
              Product that lets you edit your favorite photos and videos at any
              time
            </p>
          </div>
        </div>

        <div className="project-single flex ">
          <img className="project-single-img" src={faceItImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">
              Facit
            </h3>
            <p>
              Get to meet your favorite internet superstar with the faceit app
            </p>
          </div>
        </div>

        <div className="project-single flex ">
          <img className="project-single-img" src={todoImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">Todo</h3>
            <p>A todo app that features cloud sync with light and dark mode</p>
          </div>
        </div>

        <div className="project-single flex ">
          <img className="project-single-img" src={loopStudiosImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">
              LoopStudios
            </h3>
            <p>A VR experience app made for Loopstudios</p>
          </div>
        </div>
      </div>
      <div className="web-designs-container flex">
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
      <PageFooter />
    </div>
  );
};

export default AppDesignPage;
