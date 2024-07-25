import styles from "./ToogleButton.module.css";

function ToogleButton() {
  return (
    <label htmlFor="theme" className={styles.theme}>
      <span className={styles.theme__toggle_wrap}>
        <input
          id="theme"
          className={styles.theme__toggle}
          type="checkbox"
          role="switch"
          name="theme"
          value="dark"
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
