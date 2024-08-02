import React from 'react';
import styles from './Contact.module.css';
import ContactImg from '../../assets/Live collaboration-rafiki.svg';
import Button from '../button/Button';
// eslint-disable-next-line
function Contact({ theme }) {
  return (
    <div className={`${styles.contactSection} ${theme}`}>
      {/* <h2 style={{transform:"rotate(-90deg)"}}>Let&apos;s get in touch!</h2> */}
      <section>
        <div className={styles.description}>
          <h1>Contact Me.</h1>
        </div>
        <form className={styles.contactForm}>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name..."
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address..."
            />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject of your message..."
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <Button>
            <a
              href="mailto:dikshantsharma2005@gmail.com"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Send Message
            </a>
          </Button>
        </form>
      </section>
      <img src={ContactImg} alt="contact" className={styles.contactImg} />
    </div>
  );
}

export default Contact;
