import canadaImage from "../../public/assets/shared/desktop/illustration-canada.svg";
import australiaImage from "../../public/assets/shared/desktop/illustration-australia.svg";
import ukImage from "../../public/assets/shared/desktop/illustration-united-kingdom.svg";

import { HashLink } from "react-router-hash-link";

const IllustrationLocationsList = () => {
  return (
    <ul className="illustration-locations-list flex">
      <li className="illustration-location-item flex">
        <div className=" illustration-img-container">
          <img className="illustration-location-image" src={canadaImage} />
        </div>
        <h3 className="uppercase">Canada</h3>
        <HashLink to="/locations#canada" className="btn btn-secondary">
          See Location
        </HashLink>
      </li>
      <li className="illustration-location-item flex">
        <div className=" illustration-img-container">
          <img className="illustration-location-image" src={australiaImage} />
        </div>
        <h3 className="uppercase">Australia</h3>
        <HashLink to="/locations#australia" className="btn btn-secondary">
          See Location
        </HashLink>
      </li>
      <li className="illustration-location-item flex">
        <div className=" illustration-img-container">
          <img className="illustration-location-image" src={ukImage} />
        </div>
        <h3 className="uppercase">United Kingdom</h3>
        <HashLink to="/locations#uk" className="btn btn-secondary">
          See Location
        </HashLink>
      </li>
    </ul>
  );
};

export default IllustrationLocationsList;
