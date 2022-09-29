import {
  Call,
  FacebookOutlined,
  Instagram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";
import { Logo } from "../../assets/svgs/logo";
import { Link } from "react-router-dom";
import "./topbar.scss";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
          <FacebookOutlined className="icons" />
        </a>
        <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
          <Twitter className="icons" />
        </a>
        <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
          <Instagram className="icons" />
        </a>
        <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
          <WhatsApp className="icons" />
        </a>
      </div>

      <div className="centre">
        <Logo className="topBarIcon" />
        <h3>
          D'Sarah <span>Daniel Brand</span>
        </h3>
      </div>
      <div className="right">
        <Call />
        <a href="tel:+234 7035853644">+234 7035853644</a>
      </div>
    </div>
  );
};
