import { useState } from "react";
import {
  HiMiniBell,
  HiEnvelope,
  HiUserCircle,
  HiMiniHeart,
} from "react-icons/hi2";

import styles from "./AdminLogin.module.css";
import ToogleButton from "../components/controls/toogleButton/ToogleButton";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
            <button>Edit Data</button>
          </NavLink>
        </div>
        <div>
          <span>Project Section</span>
          <NavLink to="projects">
            <button>Open</button>
          </NavLink>
        </div>
      </section>
      <Outlet />
    </div>
  );
}

function ToDo() {
  return (
    <div className={styles.toDo}>
      <div className="container">
        <div className="header">
          <h1>To Do App</h1>
          <div className="add-new-task">
            <form id="new-task" className="new-task">
              <label>Enter Task</label>
              <input type="text" placeholder="Enter Task" name="details" />
              <label>Due</label>
              <input type="date" placeholder="Select Due time" name="due" />
              <button type="submit" value="add">
                Add
              </button>
            </form>
          </div>
          <div className="filter">
            <label>Filter</label>
            <select id="filter">
              <option value="none">None</option>
              <option value="done">Done</option>
              <option value="due">Due</option>
            </select>
          </div>
          <div className="clear">
            <button id="clear-taskbar">Remove All</button>
          </div>
        </div>
        <div className="task-list" id="task-list">
          <ul></ul>
        </div>
      </div>
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
