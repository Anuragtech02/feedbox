import React from "react";
import styles from "./BaseLayout.module.scss";
import { Navbar, Footer } from "../../components";
import clsx from "clsx";

const BaseLayout = ({ children, classNames = [] }) => {
  return (
    <section className={clsx(styles.container, ...classNames)}>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default BaseLayout;
