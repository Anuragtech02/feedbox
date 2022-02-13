import React from "react";
import styles from "./Banner.module.scss";

const Banner = ({ title, image }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default Banner;
