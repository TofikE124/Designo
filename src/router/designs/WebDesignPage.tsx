import expressImage from "../../../public/assets/web-design/desktop/image-express.jpg";
import transferImage from "../../../public/assets/web-design/desktop/image-transfer.jpg";
import photonImage from "../../../public/assets/web-design/desktop/image-photon.jpg";
import builderImage from "../../../public/assets/web-design/desktop/image-builder.jpg";
import blogrImage from "../../../public/assets/web-design/desktop/image-blogr.jpg";
import campImage from "../../../public/assets/web-design/desktop/image-camp.jpg";

import arrowIcon from "../../../public/assets/shared/desktop/icon-right-arrow.svg";

import appDesignDesktop from "../../../public/assets/home/desktop/image-app-design.jpg";
import appDesignTablet from "../../../public/assets/home/tablet/image-app-design.jpg";
import appDesignMobile from "../../../public/assets/home/mobile/image-app-design.jpg";

import graphicDesignDesktop from "../../../public/assets/home/desktop/image-graphic-design.jpg";
import graphicDesignTablet from "../../../public/assets/home/tablet/image-graphic-design.jpg";
import graphicDesignMobile from "../../../public/assets/home/mobile/image-graphic-design.jpg";
import PageFooter from "../../components/PageFooter";

import { HashLink } from "react-router-hash-link";

const WebDesignPage = () => {
  return (
    <div className="design-page  container">
      <div className="design-page-header bg-peach bg-hero-pattern bg-hero-pattern-animate-y grid">
        <h1 className="h1 txt-white">Web Design</h1>
        <p className="txt-white">
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </div>
      <div className="projects-container grid ">
        <div className="project-single flex ">
          <img className="project-single-img" src={expressImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">
              Express
            </h3>
            <p>A multi-carrier shipping website for ecommerce businesses</p>
          </div>
        </div>

        <div className="project-single flex ">
          <img className="project-single-img" src={transferImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">
              Transfer
            </h3>
            <p>
              Site for low-cost money transfers and sending money within seconds
            </p>
          </div>
        </div>

        <div className="project-single flex ">
          <img className="project-single-img" src={photonImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">
              Photon
            </h3>
            <p>
              A state-of-the-art music player with high-resolution audio and DSP
              effects
            </p>
          </div>
        </div>

        <div className="project-single flex ">
          <img className="project-single-img" src={builderImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">
              Builder
            </h3>
            <p>
              Connects users with local contractors based on their location{" "}
            </p>
          </div>
        </div>

        <div className="project-single flex ">
          <img className="project-single-img" src={blogrImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">
              Blogr
            </h3>
            <p>Connects users with local contractors based on their location</p>
          </div>
        </div>

        <div className="project-single flex ">
          <img className="project-single-img" src={campImage} />
          <div className="project-single-content flex">
            <h3 className="h3 fw-semi-bold letter-spacing-1 txt-peach">
              Camop
            </h3>
            <p>
              Get expert training in coding, data, design, and digital marketing
            </p>
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
              <source media="(min-width:55em)" srcSet={appDesignDesktop} />
              <source media="(min-width:45em)" srcSet={appDesignTablet} />
              <img src={appDesignMobile} />
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

export default WebDesignPage;
