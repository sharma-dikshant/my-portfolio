import { NavLink } from "react-router-dom";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Logo from "./../../assets/logoo.png";
import styles from "./Header.module.css";
//eslint-disable-next-line
function Header({ theme, setTheme }) {

  return (
    <div className={`${styles.header} ${theme}`}>
      <div>
        <img src={Logo} alt="logo" className={styles.logo} />
        <h2>Dikshant Sharma</h2>
      </div>
      <div className={styles.controlButtons}>
        <span
          className={styles.icon}
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
        </span>
        <span className={styles.icon}>
          <NavLink to="/admin-auth" style={{color:"#61892F"}}>
            <RiUserSettingsFill />
          </NavLink>
        </span>
      </div>
    </div>
  );
}

export default Header;
