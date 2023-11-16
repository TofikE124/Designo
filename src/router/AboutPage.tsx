import aboutHeroImageDesktop from "../../public/assets/about/desktop/image-about-hero.jpg";
import aboutHeroImageTablet from "../../public/assets/about/tablet/image-about-hero.jpg";
import aboutHeroImageMobile from "../../public/assets/about/mobile/image-about-hero.jpg";

import aboutWorldClassImageDesktop from "../../public/assets/about/desktop/image-world-class-talent.jpg";
import aboutWorldClassImageTablet from "../../public/assets/about/tablet/image-world-class-talent.jpg";
import aboutWorldClassImageMobile from "../../public/assets/about/mobile/image-world-class-talent.jpg";

import realDealImageDesktop from "../../public/assets/about/desktop/image-real-deal.jpg";
import realDealImageTablet from "../../public/assets/about/tablet/image-real-deal.jpg";
import realDealImageMobile from "../../public/assets/about/mobile/image-real-deal.jpg";

import PageFooter from "../components/PageFooter";
import IllustrationLocationsList from "../components/IllustrationLocationsList";
const AboutPage = () => {
  return (
    <div className="container about-page">
      <div className="about-hero two-flex flex">
        <div className="two-flex-content col col-left bg-peach flow">
          <h1 className="h1 fw-semi-bold txt-white">About us</h1>
          <p className="txt-white">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <div className="two-flex-image-container col">
          <picture>
            <source media="(min-width:55em)" srcSet={aboutHeroImageDesktop} />
            <source media="(min-width:45em)" srcSet={aboutHeroImageTablet} />
            <img className="two-flex-image" src={aboutHeroImageMobile} />
          </picture>
        </div>
      </div>
      <div className="about-world-class two-flex  flex">
        <div className="two-flex-content three-circles-pattern col col-left flow">
          <h1 className="h1 fw-semi-bold txt-peach">World-class talent</h1>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.{" "}
          </p>
        </div>
        <div className="two-flex-image-container col">
          <picture>
            <source
              media="(min-width:55em)"
              srcSet={aboutWorldClassImageDesktop}
            />
            <source
              media="(min-width:45em)"
              srcSet={aboutWorldClassImageTablet}
            />
            <img className="two-flex-image" src={aboutWorldClassImageMobile} />
          </picture>
        </div>
      </div>
      <IllustrationLocationsList />
      <div className="about-real-deal two-flex flex">
        <div className="two-flex-content three-circles-pattern col col-left flow">
          <h1 className="h1 fw-semi-bold txt-peach">The real deal</h1>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure succes
          </p>
          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
        <div className="two-flex-image-container col">
          <picture>
            <source media="(min-width:55em)" srcSet={realDealImageDesktop} />
            <source media="(min-width:45em)" srcSet={realDealImageTablet} />
            <img className="two-flex-image" src={realDealImageMobile} />
          </picture>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default AboutPage;
