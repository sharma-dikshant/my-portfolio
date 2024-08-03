import styles from "./Intro.module.css";
import Button from "../button/Button";
import LitteThings from "../../assets/The Little Things - Working.png";
import SocialConnect from "../socialConnects/SocialConnect";

//eslint-disable-next-line
function Intro({ likes, updateLikes, theme, resume }) {
  return (
    <div className={`${styles.intro} ${theme}`}>
      <section>
        <h1>
          <span className={styles.word}>
            Full Stac<span className={styles.superscript}>k</span>
          </span>
          <span className={styles.word}>Developer</span>
        </h1>
        <p>
          Crafting innovative web solutions that seamlessly integrate creativity
          with functionality, delivering captivating digital experiences.
        </p>
        <div>
          <Button>Hire ME</Button>
          <a href={resume} target="_blank">
            <Button>Resume</Button>
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>
              <p>Connect With Me.</p>
            </span>
            <SocialConnect theme={theme} />
          </div>
        </div>
      </section>
      <section>
        <img src={LitteThings} alt="Little Things" className={styles.img} />
      </section>
    </div>
  );
}

export default Intro;
