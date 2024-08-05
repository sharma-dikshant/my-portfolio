import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";

import { HiMiniBell, HiEnvelope, HiMiniHeart } from "react-icons/hi2";

import styles from "./AdminLogin.module.css";
import ToogleButton from "../components/toogleButton/ToogleButton";
import Button from "../components/button/Button";
import ToDo from "../components/toDo/ToDo";
import CheckBox from "../components/checkbox/CheckBox";

export default function AdminLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        setIsLoggedIn(true);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Invalid email or password");
        setEmail("");
        setPassword("");
      });
  }

  useEffect(
    function () {
      auth.onAuthStateChanged(function (user) {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    },
    [isLoggedIn]
  );

  return !isLoggedIn ? (
    <div className={styles.container}>
      <h2 className={styles.title}>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button}>
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
        {/* <button onClick={() => signOut(auth)}>Logout</button> */}
      </div>
      <div>
        <ToogleButton />
        <span className={styles.icon}>
          <Link to="messages">
            <HiMiniBell />
          </Link>
        </span>
        <span className={styles.icon}>
          <HiEnvelope />
        </span>
        {/* <span className={styles.userButton}>
          <span>
            Dikshant
            <span className={styles.icon}>
              <HiUserCircle />
            </span>
          </span>
        </span> */}
        <CheckBox opt_1="Home" opt_2="logout" callback2={() => signOut(auth)} />
      </div>
    </div>
  );
}

function DashMain() {
  const [likes, setLikes] = useState(0);

  useEffect(function () {
    async function fetchData() {
      try {
        const docRef = doc(db, "portfolio", "likes");
        const docSnap = await getDoc(docRef);

        // console.log(docRef.id);
        // console.log(docSnap.data().likes);
        setLikes(docSnap.data().likes);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className={styles.dashMain}>
      <section className={styles.stats}>
        <div>
          <strong>
            Likes <br /> {likes}
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
