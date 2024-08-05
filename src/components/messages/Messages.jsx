import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./Messages.module.css";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(function () {
    async function fetchData() {
      try {
        const CollectionRef = collection(db, "messages");
        const data = await getDocs(CollectionRef);
        // console.log(data.docs.data());
        setMessages([...data.docs.map((doc) => doc.data())]);
        // setMessages([...dataArr]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return messages.length !== 0 ? (
    <div className={styles.messageContainer}>
      {messages.map((message, i) => (
        <Message key={i} message={message} />
      ))}
    </div>
  ) : (
    <h2>No messages yet</h2>
  );
}
//eslint-disable-next-line
function Message({ message }) {
  return (
    <div className={styles.message}>
      {/* eslint-disable-next-line */}
      <h3 className={styles.name}>{message.fullname}</h3>
      {/* eslint-disable-next-line */}
      <p className={styles.email}>{message.email}</p>
      {/* eslint-disable-next-line */}
      <p className={styles.message}>{message.message}</p>
      {/* eslint-disable-next-line */}
      <p className={styles.date}>{message.date}</p>
    </div>
  );
}
