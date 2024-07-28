import styles from "./DataEditor.module.css";

const data = [
  {
    title: "Header",
    intro: "Hello, 👋 <br /> Dikshant Sharma",
    image: "https://avatars.githubusercontent.com/u/56189275?v=4",
  },
  {
    title: "About Me",
    description:
      "I am a Full Stack Developer, currently working at <a href='https://www.codingninjas.com/'>Coding Ninjas</a>. I am a tech enthusiast and love to explore new technologies. I have worked on various projects and have experience in developing web applications. I am a quick learner and always ready to learn new things.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Django",
      "C++",
      "Java",
    ],
  },
];

function DataEditor() {
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
          {data.map((entry, i) => (
            <tr key={i}>
              <td rowSpan={"1"}>{entry.title}</td>
              <td>{entry?.intro || entry?.description}</td>
              <td>{entry?.image || entry?.skills.join(", ")}</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataEditor;
