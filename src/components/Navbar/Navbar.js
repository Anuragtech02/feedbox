import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { navItems } from "../../utils/headerData";
import clsx from "clsx";
import logo from "../../assets/feedbox-logo-blue.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [cls, setCls] = useState(styles.dark);

  useEffect(() => {
    const changeBg = () => {
      if (window.pageYOffset > 100) setCls(styles.light);
      else setCls(styles.dark);
    };
    document.addEventListener("scroll", changeBg, null);
    return () => document.removeEventListener("scroll", changeBg, null);
  }, []);

  return (
    <nav className={clsx(styles.container, cls)}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo-feedbox" />
        </Link>
      </div>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li
            className={clsx(
              styles.navItem,
              pathname === item.path ? styles.selected : ""
            )}
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.burgerContainer}>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
      </div>
    </nav>
  );
};

export default Navbar;
