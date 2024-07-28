import styles from "./Contact.module.css";

import Button from "../button/Button";

function Contact() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.description}>
        <p>Feel free to reach out to me at</p>
      </div>
      <form className={styles.contactForm}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <Button>
          <a
            href="mailto:dikshantsharma2005@gmail.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            send mail
          </a>
        </Button>
      </form>
    </div>
  );
}

export default Contact;
