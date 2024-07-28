import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "./SocialConnect.module.css";

export function SocialConnect() {
  return (
    <div className={styles.socialLinks}>
      <a href="https://www.linkedin.com/in/dikshant-sharma-460611285" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/sharma-dikshant" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}
