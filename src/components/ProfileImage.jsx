import pfp from "../assets/pfp.png";
import styles from "./ProfileImage.module.css";
import SocialHandles from "./SocialHandles";
const ProfileImage = () => {
  return (
    <div className={styles.pfpHandle}>
      <img src={pfp} alt="My Image" className={styles.pfp}></img>
      <SocialHandles />
    </div>
  );
};
export default ProfileImage;
