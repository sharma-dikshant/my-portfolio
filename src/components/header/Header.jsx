import img from "../../assets/me.png";
import Controls from "../controls/Controls";
import { SocialConnect } from "../socialConnects/SocialConnect";
import { FaHeart } from "react-icons/fa";
import styles from "./Header.module.css";
//eslint-disable-next-line
function Header({ likes, updateLikes }) {
  return (
    <>
      <div className={styles.controls}>
        <Controls />
      </div>
      <div className={styles.intro}>
        <div className={styles.profilePhoto}>
          <img src={img} alt="profile" style={{ maxWidth: "200px" }} />
        </div>
        <div className={styles.socialConnect}>
          <h2>
            Hello, 👋 I&apos;m
            <br /> <span className={styles.name}>Dikshant Sharma</span>
          </h2>
          <SocialConnect />
          <div className={styles.likes}>
            <span>
              <strong>{likes}</strong>
            </span>
            <span className={styles.icon} onClick={() => updateLikes()}>
              <FaHeart />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
