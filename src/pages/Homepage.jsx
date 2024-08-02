import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import Project from "../components/project/Project";
import Intro from "../components/intro/Intro";
import Skills from "../components/skills/Skills";
import styles from "./Homepage.module.css";

function Homepage() {
  const [theme, setTheme] = useState("dark");
  const [likes, setLikes] = useState(0);
  const [projectList, setProjectList] = useState([]);
  const [headerData, setHeaderData] = useState({});
  const [aboutData, setAboutData] = useState({});

  useEffect(
    function () {
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
    },
    [likes]
  );

  useEffect(function () {
    async function fetchData() {
      try {
        const docRef = doc(db, "projects", "EHzcqmc7DUlrKw83dySi");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // console.log(docRef.id);
          // console.log(docSnap.data());
          const data = docSnap.data();
          const projectsArray = data.projects;
          // console.log(projectsArray);
          setProjectList(projectsArray);
        } else {
          // console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);

  useEffect(function () {
    async function fetchData() {
      const docRef = doc(db, "portfolio", "websiteData");
      const docSnap = await getDoc(docRef);
      // console.log(docSnap.data());
      // console.log(docSnap.data().Header);
      setHeaderData(docSnap.data().Header);
      // console.log(docSnap.data().About);
      setAboutData(docSnap.data().About);
    }
    fetchData();
  }, []);

  function updateLikes() {
    setLikes(likes + 1); // This will update the likes in the UI
    const docRef = doc(db, "portfolio", "likes");
    updateDoc(docRef, {
      likes: likes + 1,
    });
  }

  return (
    <div>
      <Header setTheme={setTheme} theme={theme} />
      <Intro headerData={headerData} theme={theme} />
      <NavBar theme={theme} />
      <About aboutData={aboutData} theme={theme} />
      <Skills theme={theme} />
      <Project projectList={projectList} theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} updateLikes={updateLikes} likes={likes} />
    </div>
  );
}

export default Homepage;
