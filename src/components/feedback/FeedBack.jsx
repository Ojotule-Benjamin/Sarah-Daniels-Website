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

      <form className="formContainer">
        <div className="emailItems">
          <label>Email *</label>
          <input type="text" />
          <label>Name *</label>
          <input type="text" />
        </div>

        <label>Message *</label>
        <textarea rows="4" cols="50" name="#" form="#">
        </textarea>

        <button>Send Message</button>
      </form>
    </div>
  );
};
