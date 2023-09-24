import Education from "../components/Education";
import styles from "./Education_Section.module.css";
const Education_Section = () => {
  return (
    <section className={styles.EducationSection} id="education">
      <h1>Education</h1>
      <Education />
    </section>
  );
};
export default Education_Section;
