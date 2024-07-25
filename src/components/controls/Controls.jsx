import ToogleButton from "./toogleButton/ToogleButton";
import { GoTools } from "react-icons/go";
import styles from "./Controls.module.css";

function Controls() {
  return (
    <div className={styles.controlButtons}>
      <span>
        <ToogleButton />
      </span>
      <span>
        <GoTools />
      </span>
    </div>
  );
}

export default Controls;
