import errorIcon from "../public/assets/contact/desktop/icon-error.svg";
const DesignSystem = () => {
  return (
    <div className="design-system flow">
      <div className=" bg-peach flex">
        <button className="btn btn-primary">Lean More</button>
        <button className="btn btn-primary">Lean More</button>
      </div>

      <div className="bg-light-grey flex">
        <button className="btn btn-secondary">Lean More</button>
        <button className="btn btn-secondary">Lean More</button>
      </div>
      <div className="bg-peach grid">
        <div className="input-field flex">
          <input placeholder="Empty Form " />
          <span className="flex">
            Can't be empty <img src={errorIcon} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;
