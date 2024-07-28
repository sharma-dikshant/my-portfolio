import ToogleButton from "../toogleButton/ToogleButton";
import { GoTools } from "react-icons/go";
import styles from "./Controls.module.css";
import { NavLink } from "react-router-dom";

function Controls() {
  return (
    <div className={styles.controlButtons}>
      <span>
        <ToogleButton />
      </span>
      <span>
        <NavLink to="/admin-auth">
          <GoTools />
        </NavLink>
      </span>
    </div>
  );
}

export default Controls;
