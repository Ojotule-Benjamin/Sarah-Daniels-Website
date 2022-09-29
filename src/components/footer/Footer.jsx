import React from "react";
import "./footer.scss";
import { LocationOn, WhatsApp, Instagram, Mail } from "@mui/icons-material";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="footerItem">
          <a
            href="https://goo.gl/maps/sQabLd4nBh6cJEPH7"
            target={"_blank"}
            rel="noreferrer"
          >
            <LocationOn />
            <span>Suite C31 Emmanuel Plaza, Utako</span>
          </a>
        </div>

        <div className="footerItem">
          <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
            <WhatsApp />
            +234 7063650901
          </a>
        </div>

        <div className="footerItem">
          <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
            <Instagram />
            @dsarahdanielsbrand
          </a>
        </div>

        <div className="footerItem">
          <a href="mailto:sarahdaniels@gmail.com">
            <Mail />
            dsarahdanielsbrand@gmail.com
          </a>
        </div>
      </div>
      <div>
        <p>
          copyright &copy;
          {year}
          <a href="/">Dsarahdaniels_brand. All rights reserved</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
