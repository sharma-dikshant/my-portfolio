import { useState } from "react";
import styles from "./ToogleButton.module.css";

function ToogleButton() {
  const [theme, setTheme] = useState("light");
  console.log(theme);
  return (
    <label htmlFor="theme" className={styles.theme}>
      <span className={styles.theme__toggle_wrap}>
        <input
          id="theme"
          className={styles.theme__toggle}
          type="checkbox"
          role="switch"
          name="theme"
          value={theme}
          onChange={() => {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
          }}
        />
        <span className={styles.theme__fill}></span>
        <span className={styles.theme__icon}>
          <span className={styles.theme__icon_part}></span>
          <span className={styles.theme__icon_part}></span>
          <span className={styles.theme__icon_part}></span>
          <span className={styles.theme__icon_part}></span>
          <span className={styles.theme__icon_part}></span>
          <span className={styles.theme__icon_part}></span>
          <span className={styles.theme__icon_part}></span>
          <span className={styles.theme__icon_part}></span>
          <span className={styles.theme__icon_part}></span>
        </span>
      </span>
    </label>
  );
}

export default ToogleButton;
