import { CarLogo, ExclusiveDesign, HandTied } from "../../assets/svgs/logo2";
import "./benefits.scss";

const Benefits = () => {
  return (
    <div className="benefitsMain">
      <div className="benefitsContainer">
        <div className="benefitsItems">
          <div className="benefitsLogoBox">
            <CarLogo />
          </div>
          <h4>Free Delivery</h4>
          <p>On every order, during the same day</p>
        </div>
        <div className="benefitsItems">
          <div className="benefitsLogoBox">
            <HandTied />
          </div>
          <h4>Hand-tied</h4>
          <p>By the best Event Planner in Nigeria</p>
          {/* <p>Bouquets and Styles</p> */}
        </div>

        <div className="benefitsItems">
          <div className="benefitsLogoBox">
            <ExclusiveDesign />
          </div>
          <h4>Exclusive Design</h4>

          <p>By the best Event Planner in Nigeria</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
