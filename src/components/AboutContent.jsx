import styles from "./AboutContent.module.css";
const AboutContent = () => {
  return (
    <div className={styles.content}>
      <span className={styles.intro}> Hi, my name is</span>
      <h1 className={styles.name}>Saurav Kumar Jha.</h1>
      <p className={styles.build}>I build things for the web.</p>
      <p className={styles.para}>
        I'm a Frontend Developer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I'm Focused on
        building accessible,human-centered products.
      </p>
      <a href="https://github.com/Saurav50" className={styles.github}>
        Check out my github!
      </a>
    </div>
  );
};
export default AboutContent;
