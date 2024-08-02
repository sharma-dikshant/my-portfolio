import React from "react";
import styles from "./About.module.css";
import Me from "../../assets/me.png";
//eslint-disable-next-line
function About({ aboutData, theme }) {
  return (
    <div className={`${styles.aboutSection} ${theme}`}>
      <section className={styles.aboutContent}>
        <h1 className={styles.heading}>About Me</h1>
        {/* eslint-disable-next-line */}
        <p className={styles.description}>{aboutData.description}</p>

        <div className={styles.education}>
          <h2>Current Education</h2>
          <p>Computer Science and Engineering</p>
          <p>College: Swami Keswanand Institute of Technology, Jaipur</p>
          <p>2024 - Current</p>
        </div>

      </section>
      <section className={styles.imageSection}>
        <img src={Me} alt="Me" className={styles.me} />
      </section>
    </div>
  );
}

export default About;
