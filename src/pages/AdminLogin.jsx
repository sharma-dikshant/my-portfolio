import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import {
  HiMiniBell,
  HiEnvelope,
  HiUserCircle,
  HiMiniHeart,
} from "react-icons/hi2";

import styles from "./AdminLogin.module.css";
import ToogleButton from "../components/toogleButton/ToogleButton";
import Button from "../components/button/Button";
import ToDo from "../components/toDo/ToDo";

export default function AdminLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return !isLoggedIn ? (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit" onClick={(e) => e.preventDefault()}>
          Login
        </button>
      </form>
    </div>
  ) : (
    <DashBoard />
  );
}

function DashBoard() {
  return (
    <>
      <DashNav />
      <div className={styles.layout}>
        <section>
          <CustomizeSection />
          <DashMain />
        </section>
        <section>
          <ToDo />
        </section>
      </div>
    </>
  );
}

function DashNav() {
  return (
    <div className={styles.dashNav}>
      <div>
        <h1>DashBoard</h1>
      </div>
      <div>
        <ToogleButton />
        <span className={styles.icon}>
          <HiMiniBell />
        </span>
        <span className={styles.icon}>
          <HiEnvelope />
        </span>
        <span className={styles.userButton}>
          <span>
            Dikshant
            <span className={styles.icon}>
              <HiUserCircle />
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

function DashMain() {
  return (
    <div className={styles.dashMain}>
      <section className={styles.stats}>
        <div>
          <strong>
            Likes <br /> 100
          </strong>
          <span className={styles.icon}>
            <HiMiniHeart />
          </span>
        </div>
        <div>
          <strong>
            Views <br /> 400
          </strong>
        </div>
      </section>
      <section className={styles.actionField}>
        <div>
          <span>Customize Info.</span>
          <NavLink to="editor">
            <Button color="green">Edit</Button>
          </NavLink>
        </div>
        <div>
          <span>Project Section</span>
          <NavLink to="projects">
            <Button color="green">Open</Button>
          </NavLink>
        </div>
      </section>
      <Outlet />
    </div>
  );
}

function CustomizeSection() {
  return (
    <div className={styles.customizeSection}>
      <h2>Welcome back! 👋🥳</h2>
    </div>
  );
}
