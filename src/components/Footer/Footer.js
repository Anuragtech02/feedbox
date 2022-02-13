import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/feedbox-logo-blue.png";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="feedbox-logo" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </p>
      <div className={styles.socialMedia}>
        <IconButton>
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <TwitterIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <YouTubeIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <InstagramIcon fontSize="small" />
        </IconButton>
      </div>
      <span>© Copyright Feedbox</span>
    </footer>
  );
};

export default Footer;
