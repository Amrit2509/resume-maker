import React from 'react';
import {Link} from 'react-router-dom';
import styles from "./Navbar2.module.css";

const Navbar2 = (props) => {
  return (
      <div className={styles.Navbar}>
          <span className={styles.navlogo}>GETResume</span>
          <div className={styles.navItems}>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
          </div>
      </div>
  );
};

export default Navbar2;