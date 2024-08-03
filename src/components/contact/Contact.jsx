import React, { useReducer, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

import styles from "./Contact.module.css";
import ContactImg from "../../assets/Live collaboration-rafiki.svg";
import Button from "../button/Button";

const initialState = {
  fullname: "",
  email: "",
  subject: "",
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "updateName":
      return { ...state, fullname: action.payload };
    case "updateEmail":
      return { ...state, email: action.payload };
    case "updateSubject":
      return { ...state, subject: action.payload };
    case "updateMessage":
      return { ...state, message: action.payload };
    case "reset":
      return { ...initialState };
    default:
      console.log("invalid");
  }
}

// eslint-disable-next-line
function Contact({ theme }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [messageSent, setMessageSent] = useState(false);
  const { fullname, email, subject, message } = state;
  console.log(fullname);
  async function sendMessage() {
    const collectionRef = collection(db, "messages");
    try {
      await addDoc(collectionRef, {
        ...state,
        date: new Date().toLocaleDateString(),
      });
      console.log("message sent!");
      dispatch({ type: "reset" });
      setMessageSent(true);
    } catch (e) {
      console.log(e);
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    if (!fullname || !email || !message) {
      alert("fiil the necessary info");
      return;
    }
    sendMessage();
  }

  return (
    <div className={`${styles.contactSection} ${theme}`}>
      {/* <h2 style={{transform:"rotate(-90deg)"}}>Let&apos;s get in touch!</h2> */}
      <section>
        <div className={styles.description}>
          <h1>Contact Me.</h1>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmitForm}>
          <div>
            <label htmlFor="fullName">
              <span style={{ color: "red" }}>*</span>Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullname}
              placeholder="Enter your full name..."
              onChange={(e) =>
                dispatch({ type: "updateName", payload: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">
              <span style={{ color: "red" }}>*</span>Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Your email address..."
              onChange={(e) =>
                dispatch({ type: "updateEmail", payload: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              placeholder="Subject of your message..."
              onChange={(e) =>
                dispatch({ type: "updateSubject", payload: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="message">
              <span style={{ color: "red" }}>*</span>Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              placeholder="Type your message here..."
              onChange={(e) =>
                dispatch({ type: "updateMessage", payload: e.target.value })
              }
            ></textarea>
          </div>
         {!messageSent? <Button>Send Message</Button>:<strong>Message Sent! 🤩</strong>}
        </form>
      </section>
      <img src={ContactImg} alt="contact" className={styles.contactImg} />
    </div>
  );
}

export default Contact;
