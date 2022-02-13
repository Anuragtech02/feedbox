import clsx from "clsx";
import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, className, dark }) => {
  return (
    <button className={clsx(styles.btn, className, dark ? styles.dark : "")}>
      {children}
    </button>
  );
};

export default Button;
