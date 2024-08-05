import styles from "./Footer.module.css";
import { FaHeart } from "react-icons/fa";
//eslint-disable-next-line
function Footer({ updateLikes, likes }) {
  return (
    <div className={styles.footer}>
      {/* <div className={styles.socialMedia}>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div> */}
      <div className={styles.footerInfo}>
        <p>
          &copy; {new Date().getFullYear()} Dikshant Sharma. All Rights
          Reserved.
        </p>
        <p>Created with React and firebase.</p>
      </div>
      <div className={styles.likes}>
        <span>
          <stong>How do you Like my portfolio.?</stong>
        </span>
        <span
          style={{ padding: "5px", display: "flex", flexDirection: "column" }}
        >
          <span className={styles.icon} onClick={() => updateLikes()}>
            <FaHeart />
          </span>
          <strong>{likes}</strong>
        </span>
      </div>
    </div>
  );
}

export default Footer;
