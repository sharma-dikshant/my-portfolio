import styles from "./Button.module.css";
// eslint-disable-next-line
export default function Button({ type="none",value="none", OnClick=null, children }) {

    return <button onClick={OnClick} className={styles.button} value={value} style={styles} type={type}><span>{children}</span></button>;
  }
  