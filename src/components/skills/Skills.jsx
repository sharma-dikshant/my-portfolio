import React from 'react';
import styles from './Skills.module.css';

// Importing icons
import arduino from "./icons/Arduino.svg";
import cpp from "./icons/C++ (CPlusPlus).svg";
import css from "./icons/CSS3.svg";
import git from "./icons/Git.svg";
import html from "./icons/HTML5.svg";
import js from "./icons/JavaScript.svg";
import react from "./icons/React.svg";
import redux from "./icons/Redux.svg";
import firebase from "./icons/Firebase.svg";
import node from "./icons/Node.js.svg";
import mysql from "./icons/MySQL.svg";
import mongodb from "./icons/MongoDB.svg";
import mongoose from "./icons/Mongoose.js.svg";
//eslint-disable-next-line
function Skills({ theme }) {
  const skills = [
    { name: "React.js", image: react },
    { name: "Redux", image: redux },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: js },
    { name: "C++", image: cpp },
    { name: "Git", image: git },
    { name: "Firebase", image: firebase },
    { name: "Node.js", image: node },
    { name: "MySQL", image: mysql },
    { name: "MongoDB", image: mongodb },
    { name: "Mongoose", image: mongoose },
    { name: "Arduino", image: arduino },
  ];

  return (
    <div className={`${styles.skills} ${theme}`}>
      <h1>Skills & Experience</h1>
      <p className={styles.description}>
        I am an expert in both Frontend, Backend, and database development. With extensive experience as both a Frontend and Backend Developer, I specialize in crafting exceptional web experiences. Utilizing Next.js, Three.js, Prisma, MongoDB, and React.js, I&apos;ve built dynamic websites and fully functional applications, showcasing proficiency in both back-end and front-end development.
      </p>
      <section className={styles.skillList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <img className={styles.icon} src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Skills;
