import React from 'react';
import {Link} from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
      <div className={styles.Navbar}>
          <span className={styles.navlogo}>GETResume</span>
          <div className={styles.navItems}>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
          </div>
      </div>
  );
};

export default Navbar;