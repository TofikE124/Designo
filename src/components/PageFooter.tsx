import { HashLink } from "react-router-hash-link";

const PageFooter = () => {
  return (
    <div className="page-footer bg-hero-pattern bg-peach flex">
      <div className="col flow">
        <h2 className="h2 fw-semi-bold txt-white">
          Let’s talk about your project
        </h2>
        <p className="txt-white">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <HashLink to="/contact#header" className="btn btn-primary">
        Get in touch
      </HashLink>
    </div>
  );
};

export default PageFooter;
