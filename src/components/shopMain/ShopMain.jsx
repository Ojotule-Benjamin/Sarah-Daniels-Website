import { Logo2 } from "../../assets/svgs/logo2";
import ShopItems from "../ShopData";
import "./shopMain.scss";

export const ShopMain = () => {
  return (
    <div className="shopMainContainer">
      <div className="shopMainTop">
        <h1>Shop Our Latest Styles</h1>
        <Logo2 />
      </div>

      <div className="shopMainWrapper">
        {ShopItems.map((d, key) => (
          <div className="shopMainItems" key={key}>
            <img src={d.img} alt="hi" />
            <h5>{d.desc}</h5>
            <h6>{d.price}</h6>
            <button>
              <span>Order Now</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShopMain;
