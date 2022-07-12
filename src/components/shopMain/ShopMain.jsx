import React from "react";
import { Logo2 } from "../../assets/svgs/logo2";
import shopMain1 from "../../assets/svgs/shopMain1.svg";
import shopMain2 from "../../assets/svgs/shopMain2.svg";
import shopMain3 from "../../assets/svgs/shopMain3.svg";
import shopMain4 from "../../assets/svgs/shopMain4.svg";
import shopMain5 from "../../assets/svgs/shopMain5.svg";
import shopMain6 from "../../assets/svgs/shopMain6.svg";
import "./shopMain.scss";

export const ShopMain = () => {
  return (
    <div className="shopMainContainer">
      <div className="shopMainTop">
        <h1>Shop Our Latest Styles</h1>
        <Logo2 />
      </div>

      <div className="shopMainWrapper">
        <div className="shopMainItems">
          <img src={shopMain1} alt="shopitemImage" />
          <h5>Flower Decor</h5>
          <h6>₦2000</h6>
          <button>
            <span>ORDER NOW</span>
          </button>
        </div>

        <div className="shopMainItems">
          <img src={shopMain2} alt="shopitemImage" />
          <h5>Love Ballons</h5>
          <h6>₦2000</h6>
          <button>
            <span>ORDER NOW</span>
          </button>
        </div>

        <div className="shopMainItems">
          <img src={shopMain3} alt="shopitemImage" />
          <h5>Cake</h5>
          <h6>₦2000</h6>
          <button>
            <span>ORDER NOW</span>
          </button>
        </div>

        <div className="shopMainItems">
          <img src={shopMain4} alt="shopitemImage" />
          <h5>Wedding Bouquet</h5>
          <h6>₦2000</h6>
          <button>
            <span>ORDER NOW</span>
          </button>
        </div>

        <div className="shopMainItems">
          <img src={shopMain5} alt="shopitemImage" />
          <h5>Wedding Candle</h5>
          <h6>₦2000</h6>
          <button>
            <span>ORDER NOW</span>
          </button>
        </div>

        <div className="shopMainItems">
          <img src={shopMain6} alt="shopitemImage" />
          <h5>Wedding Candle</h5>
          <h6>₦2000</h6>
          <button>
            <span>ORDER NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
};
