import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "./SocialConnect.module.css";
import Button from "../button/Button";
//eslint-disable-next-line
export default function SocialConnect({ theme }) {
  return (
    <div className={`${styles.socialLinks} ${theme}`}>
      <a
        href="https://www.linkedin.com/in/dikshant-sharma-460611285"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          style={theme === "light" ? { color: "black" } : { color: "white" }}
        />
      </a>
      <a href="https://github.com/sharma-dikshant" target="_blank">
        <FaGithub
          style={theme === "light" ? { color: "black" } : { color: "white" }}
        />
      </a>
    </div>
  );
}
