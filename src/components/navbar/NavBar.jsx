import { FaAddressCard } from "react-icons/fa6";
import { GoCodeSquare } from "react-icons/go";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaEnvelope } from "react-icons/fa6";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <span>
        <FaAddressCard />
      </span>
      <span>
        <GoCodeSquare />
      </span>
      <span>
        <HiMiniUserGroup />
      </span>
      <span>
        <FaEnvelope />
      </span>
    </nav>
  );
}

export default NavBar;
