import img from "../../assets/me.png";
import Controls from "../controls/Controls";
import { SocialConnect } from "../socialConnects/SocialConnect";
import { FaHeart } from "react-icons/fa";
import styles from "./Header.module.css";

function Header() {
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
            Hello, 👋 <br /> I&apos;m Dikshant Sharma
          </h2>
          <SocialConnect />
          <div className={styles.likes}>
            <span>
              <strong>100</strong>
            </span>
            <span className={styles.icon}>
              <FaHeart />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
