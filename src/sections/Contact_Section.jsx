import Contact from "../components/Contact";
import styles from "./Contact_Section.module.css";
import pointing_down from "../assets/pointing_down.png";
import SocialHandles from "../components/SocialHandles";
const Contact_Section = () => {
  return (
    <section className={styles.contact_section} id="contact">
      <h1>Contact Me</h1>
      <div className={styles.flex_row}>
        <div className={styles.socials}>
          <p>Do you speak Na'Vi? It's ok if you don't, I speak English too.</p>
          <div className={styles.social_media}>
            <SocialHandles />
            <div className={styles.social_text}>
              <ul>
                <a href="https://twitter.com/Saurav_50">Follow me on Twitter</a>
                <a href="https://www.instagram.com/_saurav.50/">
                  Follow me on Instagram
                </a>
                <a href="https://github.com/Saurav50">Follow me on Github</a>
                <a href="#">Join Discord</a>
                <a href="https://www.linkedin.com/in/saurav-kumar-jha-885337223/">
                  Connect with me on LinkedIn
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.send}>
            Send me a message
            <span>
              <img src={pointing_down} alt="" className={styles.point_down} />
            </span>
          </h2>
          <Contact />
        </div>
      </div>
    </section>
  );
};
export default Contact_Section;
