import { Logo2 } from "../../assets/svgs/logo2";
import services1 from "../../assets/svgs/services1.svg";
import services2 from "../../assets/svgs/services2.svg";
import services3 from "../../assets/svgs/services3.svg";
import "./services.scss";

const Services = () => {
  return (
    <div className="servicesMain">
      <header>
        <h1>Services</h1>
        <Logo2 />
      </header>
      <div className="serviceWrapper">
        <div className="serviceContainer">
          <img src={services1} alt="" />
          <div className="serviceItems">
            <h3>Full package</h3>
            <h6>Bridal Bouquets</h6>
            <hr />
            <h6>Bridesmaids Bouquets</h6>
            <hr />
            <h6>Corriages</h6>
            <hr />
            <h6>Corriages</h6>
            <hr />
            <h4>
              From <span>₦144,000</span>
            </h4>
          </div>
        </div>

        {/*2nd container */}

        <div className="serviceContainer">
          <img src={services2} alt="" />
          <div className="serviceItems">
            <h3>Ceremony</h3>
            <h6>Bridal Bouquets</h6>
            <hr />
            <h6>Bridesmaids Bouquets</h6>
            <hr />
            <h6>Corriages</h6>
            <hr />
            <h6>Corriages</h6>
            <hr />
            <h4>
              From <span>₦144,000</span>
            </h4>
          </div>
        </div>

        {/*3rd container */}

        <div className="serviceContainer">
          <img src={services3} alt="" />
          <div className="serviceItems">
            <h3>Bouquets</h3>
            <h6>Bridal Bouquets</h6>
            <hr />
            <h6>Bridesmaids Bouquets</h6>
            <hr />
            <h6>Corriages</h6>
            <hr />
            <h6>Corriages</h6>
            <hr />
            <h4>
              From <span>₦144,000</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
