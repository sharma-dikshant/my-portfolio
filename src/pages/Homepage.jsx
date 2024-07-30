import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import Project from "../components/project/Project";
function Homepage() {
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
  
  useEffect(
    function () {
     
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
    },
    []
  );

  useEffect(function(){
    async function fetchData(){
      const docRef = doc(db, "portfolio", "websiteData");
      const docSnap = await getDoc(docRef);
      // console.log(docSnap.data());
      // console.log(docSnap.data().Header);
      setHeaderData(docSnap.data().Header);
      // console.log(docSnap.data().About);
      setAboutData(docSnap.data().About);
    }
    fetchData();
  },[])

  function updateLikes() {
    setLikes(likes + 1); // This will update the likes in the UI
    const docRef = doc(db, "portfolio", "likes");
    updateDoc(docRef, {
      likes: likes + 1,
    });
  }

  return (
    <div>
      <Header updateLikes={updateLikes} likes={likes} headerData={headerData}/>
      <NavBar />
      <About aboutData={aboutData}/>
      <Project projectList={projectList}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
