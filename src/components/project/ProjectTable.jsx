import styles from "./ProjectTable.module.css";

const projectList = [
  {
    id: 1,
    title: "Project 1",
    description: "This is project 1",
    image: "https://via.placeholder.com/150",
    live: "https://live.com",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is project 2",
    image: "https://via.placeholder.com/150",
    live: "https://live.com",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is project 3",
    image: "https://via.placeholder.com/150",
    live: "https://live.com",
    github: "https://github.com",
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is project 4",
    image: "https://via.placeholder.com/150",
    live: "https://live.com",
    github: "https://github.com",
  },
  {
    id: 5,
    title: "Project 5",
    description: "This is project 5",
    image: "https://via.placeholder.com/150",
    live: "https://live.com",
    github: "https://github.com",
  },
];

export default function ProjectTable() {
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projectList.map((prj) => (
            <tr key={prj.id}>
              <td>{prj.id}</td>
              <td>{prj.title}</td>
              <td>{prj.live}</td>
              <td>{prj.github}</td>
              <td>{prj.image}</td>
              <td>{prj.description}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="7" className={styles.actions}>
              <button>Add New</button>
              <button>Close</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
