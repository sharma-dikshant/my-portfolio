import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "./SocialConnect.module.css";
import Button from "../button/Button";

export function SocialConnect() {
  return (
    <div className={styles.socialLinks}>
      <a
        href="https://www.linkedin.com/in/dikshant-sharma-460611285"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/sharma-dikshant" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://drive.google.com/file/d/1UgI1lViYabzOptQdG88dEmxIAr5MtmBA/view?usp=sharing"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <Button>Resume</Button>
      </a>
    </div>
  );
}
