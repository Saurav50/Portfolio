import React from "react";
import styles from "./DownArrow.module.css"; // Import your CSS file for styling

function DownArrowButton() {
  return (
    <a className={styles.downArrowButton} href="#skills">
      <div className={styles.arrow}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
  );
}

export default DownArrowButton;
