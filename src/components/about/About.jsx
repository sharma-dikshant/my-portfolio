import styles from "./About.module.css";
//eslint-disable-next-line
function About({ aboutData}) {
  return (
    <div className={styles.aboutSection}>
      <h2>About me</h2>
      <p>
      {/* eslint-disable-next-line */}
        {aboutData.description}
      </p>
    </div>
  );
}

export default About;
