import styles from "./Intro.module.css";
import Button from "../button/Button";
import LitteThings from "../../assets/The Little Things - Working.png";
import SocialConnect from "../socialConnects/SocialConnect";

//eslint-disable-next-line
function Intro({ likes, updateLikes, theme }) {
  return (
    <div className={`${styles.intro} ${theme}`}>
      <section>
        <h1>Full Stack Developer</h1>
        <p>
          Crafting innovative web solutions that seamlessly integrate creativity
          with functionality, delivering captivating digital experiences.
        </p>
        <div>
          <Button>Hire ME</Button>
          <Button>Resume</Button>
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
            <SocialConnect theme={theme}/>
          </div>
        </div>
      </section>
      <section>
        <img src={LitteThings} alt="Little Things" />
      </section>
    </div>
  );
}

export default Intro;
