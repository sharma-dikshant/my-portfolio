import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "./SocialConnect.module.css";

export function SocialConnect() {
  return (
    <div className={styles.socialLinks}>
      <a href="https://www.linkedin.com/in/dikshant-sharma-2005/">
        <FaLinkedin />
      </a>
      <a href="github.com/dikshantsharma2005">
        <FaGithub />
      </a>
    </div>
  );
}
