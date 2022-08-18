import { Logo2 } from "../../assets/svgs/logo2";
import shopImage1 from "../../assets/svgs/shopImage1.svg";
import shopImage2 from "../../assets/svgs/shopImage2.svg";
import shopImage3 from "../../assets/svgs/shopImage3.svg";
import "./shop.scss";

const Shop = () => {
  return (
    <div className="shopMain">
      <div className="shopMenu">
        <h1>Lets Plan your Perfect Wedding</h1>
        <p>WELCOME</p>
        <div className="shoplogo2">
          <Logo2 />
        </div>
      </div>

      <div className="shopItemsWrapper">
        <div className="shopItems">
          <img src={shopImage1} alt="shopItems" />
          <h4>Bouquets & Style</h4>
          <button>
            <p>SHOP NOW</p>
          </button>
        </div>
        <div className="shopItems">
          <img src={shopImage2} alt="shopItems" />
          <h4>Wedding Planning</h4>
          <button>
            <p>SHOP NOW</p>
          </button>
        </div>
        <div className="shopItems">
          <img src={shopImage3} alt="shopitems" />
          <h4>Catering & Decoration</h4>
          <button>
            <p>SHOP NOW</p>
          </button>
        </div>

        {/* <div className="shopItems">
          <img src={shopImage1} alt="shopItems" />
          <h4>Bouquets & Style</h4>
          <button>
            <p>SHOP NOW</p>
          </button>
        </div>

        <div className="shopItems">
          <img src={shopImage2} alt="shopitems" />
          <h4>Wedding Planning</h4>
          <button>
            <p>SHOP NOW</p>
          </button>
        </div>

        <div className="shopItems">
          <img src={shopImage3} alt="shopItems" />
          <h4>Catering & Decoration</h4>
          <button>
            <p>SHOP NOW</p>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Shop;
