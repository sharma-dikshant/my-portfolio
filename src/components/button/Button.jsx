import styles from "./Button.module.css";
// eslint-disable-next-line
export default function Button({ type="none",value="none", OnClick=null, children }) {

    return <button className={styles.button} value={value} style={styles} type={type} onClick={OnClick}><span>{children}</span></button>;
  }
  