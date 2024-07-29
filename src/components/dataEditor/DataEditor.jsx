import { useState } from "react";
//eslint-disable-next-line
import { collection, doc, getDoc, updateDoc, addDoc } from "firebase/firestore";
import { useEffect } from "react";

import { db } from "../../firebase";
import styles from "./DataEditor.module.css";

function DataEditor() {
  const [header, setHeader] = useState({});
  const [about, setAbout] = useState({});
  const [resume, setResume] = useState("https://drive.google.com/file/d/1UgI1lViYabzOptQdG88dEmxIAr5MtmBA/view?usp=sharing");

  useEffect(function () {
    // async function addData() {
    //   const docRef = doc(db, "portfolio", "websiteData");
    //   console.log(docRef);
    //   await updateDoc(docRef, {
    //     Header: {
    //       intro: " Hello, 👋 <br /> Dikshant Sharma",
    //       Likes: "100",
    //       image: "https://avatars.githubusercontent.com/u/56189275?v=4",
    //     },
    //     About: {
    //       title: "About Me",
    //       description:
    //         "I am a Full Stack Developer, currently working at <a href='https://www.codingninjas.com/'>Coding Ninjas</a>. I am a tech enthusiast and love to explore new technologies. I have worked on various projects and have experience in developing web applications. I am a quick learner and always ready to learn new things.",
    //       skills: [
    //         "HTML",
    //         "CSS",
    //         "JavaScript",
    //         "React",
    //         "Node.js",
    //         "Express.js",
    //         "MongoDB",
    //         "Python",
    //         "Django",
    //         "C++",
    //         "Java",
    //       ],
    //     },
    //   });
    // }
    // addData();

    async function fetchData() {
      try {
        const docRef = doc(db, "portfolio", "websiteData");
        const docSnap = await getDoc(docRef);

        console.log(docSnap.data());
        setHeader(docSnap.data().Header);
        setAbout(docSnap.data().About);
        setResume(docSnap.data().resume);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.dataEditor}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Intro/Description</th>
            <th>Image/Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Header</td>
            <td>{header.intro}</td>
            <td>
              <img src={header.image} alt="profile" />
            </td>
          </tr>
          <tr>
            <td>About</td>
            <td>{about.title}</td>
            <td>
              <p>{about.description}</p>
              <ul>
                {about.skills?.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Resume</td>
            <td colSpan={2}>{resume}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataEditor;
