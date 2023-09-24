import AboutContent from "../components/AboutContent";
import ProfileImage from "../components/ProfileImage";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.about} id="about">
      <AboutContent />
      <ProfileImage />
    </section>
  );
};
export default About;
