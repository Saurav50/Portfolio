import pfp from "../assets/pfp.png";
import styles from "./ProfileImage.module.css";
import SocialHandles from "./SocialHandles";
const ProfileImage = () => {
  return (
    <div className={styles.pfpHandle}>
      <div className={styles.pfp}>
        <img src={pfp} alt="My Image" className={styles.pfpImg}></img>
      </div>
      <div>
        <SocialHandles />
      </div>
    </div>
  );
};
export default ProfileImage;
