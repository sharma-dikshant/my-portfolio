import { useState, useEffect } from "react";
import { getDoc, doc, updateDoc } from "firebase/firestore";

import { db } from "../../firebase";
import styles from "./ProjectTable.module.css";

export default function ProjectTable() {
  const [projectList, setProjectList] = useState([
    {
      id: 1,
      title: "WorldWise",
      description: "A tracking app for all your trips at single place",
      image: "./screenshots/image.png",
      github: "https://github.io",
      link: "#",
    },
  ]);

  const [add, setAdd] = useState(false);

  let newTitle;
  let newLive;
  let newGithub;
  let newImage;
  let newDescription;
  let newTechStack;

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
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);

  async function handleDelete(id) {
    const docRef = doc(db, "projects", "EHzcqmc7DUlrKw83dySi");
    console.log("Delete", id);
    const newArray = projectList.filter((project) => project.id !== id);
    // console.log(newArray);
    try {
      await updateDoc(docRef, {
        projects: newArray,
      });
      setProjectList((prev) => prev.filter((project) => project.id !== id));
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  }

  async function handleAdd() {
    const docRef = doc(db, "projects", "EHzcqmc7DUlrKw83dySi");

    const newProject = {
      id: Date.now(),
      title: newTitle,
      description: newDescription,
      image: newImage,
      github: newGithub,
      link: newLive,
      techStack: newTechStack,
    };
    const newArray = [...projectList, newProject];
    console.log(newArray);
    try {
      await updateDoc(docRef, {
        projects: newArray,
      });
      setProjectList((prev) => [...prev, newProject]);
    } catch (error) {
      console.error("Error adding data: ", error);
    } finally {
      setAdd(false);
    }
  }
  console.log(projectList);
  return (
    <div className={styles.projects}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Live</th>
            <th>Github</th>
            <th>Image</th>
            <th>Description</th>
            <th>teckStack</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projectList.map((prj, i) => (
            <tr key={i}>
              <td>{prj.id}</td>
              <td>{prj.title}</td>
              <td>{prj.live}</td>
              <td>{prj.github}</td>
              <td>{prj.image}</td>
              <td>{prj.description}</td>
              <td>{prj.techStack?.join(", ")}</td>
              <td>
                <button onClick={() => handleDelete(prj.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {add && (
            <tr>
              <td>
                <input value={Date.now()} disabled />
              </td>
              <td>
                <input onChange={(e) => (newTitle = e.target.value)} />
              </td>
              <td>
                <input
                  onChange={(e) => {
                    newLive = e.target.value;
                  }}
                />
              </td>
              <td>
                <input onChange={(e) => (newGithub = e.target.value)} />
              </td>
              <td>
                <input onChange={(e) => (newImage = e.target.value)} />
              </td>
              <td>
                <input onChange={(e) => (newDescription = e.target.value)} />
              </td>
              <td>
                <input
                  onChange={(e) => (newTechStack = e.target.value.split(", "))}
                />
              </td>
              <td>
                <button onClick={handleAdd}>Add</button>
              </td>
            </tr>
          )}
          <tr>
            <td colSpan="7" className={styles.actions}>
              <button onClick={() => setAdd(true)}>Add New</button>
              <button>Close</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
