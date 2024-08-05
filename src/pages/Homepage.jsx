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


function Homepage() {
  const [theme, setTheme] = useState("dark");
  const [likes, setLikes] = useState(0);
  const [resume, setResume] = useState("");
  const [aboutData, setAboutData] = useState("");
  const [projectList, setProjectList] = useState([]);

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
          const data = docSnap.data();
          const projectsArray = data.projects;
          setProjectList(projectsArray);
        } else {
          console.log("No such document!");
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
      setAboutData(docSnap.data().About);

      setResume(docSnap.data().resume);
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
      <Header setTheme={setTheme} theme={theme}/>
      <Intro theme={theme} resume={resume}/>
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
