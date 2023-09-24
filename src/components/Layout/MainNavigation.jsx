import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <>
      <header className={styles.header}>
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
        <nav className={styles.nav}>
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
                href="https://drive.google.com/file/d/1xarFEuKAPvUdDaHMQc95I5fXPPURl0zl/view?usp=drive_link"
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
