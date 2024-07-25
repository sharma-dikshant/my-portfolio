import PropTypes from "prop-types";
import ProjectItem from "./projectItem/ProjectItem";
import styles from "./Project.module.css";

const projectList = [
  {
    id: 1,
    title: "Project 1",
    description: "This is project 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is project 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is project 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is project 4",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Project 5",
    description: "This is project 5",
    image: "https://via.placeholder.com/150",
  },

];

function Project() {
  return (
    <div className={styles.projectSection}>
      {projectList.map((project) => (
        // <Item project={project} key={project.id} />
        <ProjectItem project={project} key={project.id}/>
      ))}
    </div>
  );
}

// Project.propTypes = {
//   project: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// };

// Item.propTypes = {
//   project: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// };
//eslint-disable-next-line
// function Item({ project }) {
//     //eslint-disable-next-line
//   const { title, description, image } = project;
//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <img src={image} alt={title} />
//     </div>
//   );
// }

export default Project;
