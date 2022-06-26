import {
  Call,
  FacebookOutlined,
  Instagram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";
import { Logo } from "../../assets/svgs/logo";
import "./topbar.scss";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topBarLeftIcons">
        <a href="https://web.facebook.com/" target={"_blank"} rel="noreferrer">
          <FacebookOutlined />
        </a>
        <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
          <Twitter />
        </a>
        <a href="https://www.instagram.com/" target={"_blank"} rel="noreferrer">
          <Instagram />
        </a>
        <a href="https://www.whatsapp.com/" target={"_blank"} rel="noreferrer">
          <WhatsApp />
        </a>
      </div>

      <div className="topBarCenterItem">
        <div className="logo">
          <Logo />
        </div>

        <h3>
          D'Sarah <span>Daniels Brand</span>
        </h3>
        <span>Event Planer</span>
      </div>

      <div className="topBarRightIcons">
        <Call />
        <span> Call us +234 7035853644</span>
      </div>
    </div>
  );
};
