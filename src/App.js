import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";

const App = () => {
  return (
    <div className={styles.container}>
      <Router basename="/feedbox">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
