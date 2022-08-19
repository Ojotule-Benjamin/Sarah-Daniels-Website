import { Logo2 } from "../../assets/svgs/logo2";
import "./feedBack.scss";

export const FeedBack = () => {
  return (
    <div className="feedBackMain">
      <header>
        <h1>Give us a Feedback</h1>
        <h2>Contact Form</h2>
        <Logo2 />
      </header>
      <div className="formContainer">
        <label>
          Email *
          <input />
          <label>
            Name *
            <input />
          </label>
        </label>

        <label>
          Message *
          <input />
        </label>
        <button>
          <span>Send Message</span>
        </button>
      </div>
    </div>
  );
};
