import styles from "./MainNavigation.module.css";
import React, { useState, useEffect } from "react";
const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header
        className={`${styles.header} ${scrolling ? styles.bordered : ""}`}
      >
        <div className={styles.logo}>
          <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="25,5 45,15 45,35 25,45 5,35 5,15"
              fill="none"
              stroke="#46b2a1"
              stroke-width="3"
            />

            <text
              x="20"
              y="30"
              font-family="Arial"
              font-size="15"
              fill="#46b2a1"
            >
              S
            </text>
          </svg>
        </div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <button
            id="menu-btn"
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          >
            <span
              className={`${styles.hamburgerTop} ${
                isMenuOpen ? styles.active : ""
              }`}
            ></span>
            <span
              className={`${styles.hamburgerMiddle} ${
                isMenuOpen ? styles.active : ""
              }`}
            ></span>
            <span
              className={`${styles.hamburgerBottom} ${
                isMenuOpen ? styles.active : ""
              }`}
            ></span>
          </button>
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <a href="#about" activeClassName={styles.active}>
                <span>0.1</span> About
              </a>
            </li>
            <li>
              <a href="#skills" activeClassName={styles.active}>
                <span>0.2</span> Skills
              </a>
            </li>
            <li>
              <a href="#projects" activeClassName={styles.active}>
                <span>0.3</span> Work
              </a>
            </li>
            <li>
              <a href="#education" activeClassName={styles.active}>
                <span>0.4</span> Education
              </a>
            </li>
            <li>
              <a href="#contact" activeClassName={styles.active}>
                <span>0.5</span> Contact
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1bXQ0lgcM1upY34bZvS7a5xAGaHv5N9Wh/view?usp=sharing"
                activeClassName={styles.active}
                className={styles.resume}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainNavigation;
