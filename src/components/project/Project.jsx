import { useState } from "react";
import styles from "./Project.module.css";
import Card from "../card/Card";
import Button from "../button/Button";

//eslint-disable-next-line
function Project({ projectList }) {
  const [visibleProject, setVisibleProject] = useState(1);
  return (
    <div className={styles.projectSection}>
      {/* eslint-disable-next-line */}
      {projectList.map((project, i) =>
        visibleProject === i + 1 ? (
          <div key={project.id} >
            <h2 style={{ textAlign:"center", padding:"10px", fontSize:"2.5rem"}}>Projects</h2>
            <div className={styles.layout}>
              <Card
                // content={project.description}
                image={project.image}
              >
                <img src={project.image} alt="prj" style={{maxWidth:"250px", maxHeight:"250px"}}/>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "100%",
                    padding: "8px",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ padding: "1px", cursor: "pointer" }}
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ padding: "1px", cursor: "pointer" }}
                    >
                      <path d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z" />
                    </svg>
                  </a>
                </div>
              </Card>
              <div className={styles.projectDetails}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.buttonContainer}>
                  <Button
                    OnClick={() =>
                      setVisibleProject((prev) =>
                        //eslint-disable-next-line
                        prev === 1 ? projectList.length : prev - 1
                      )
                    }
                  >
                    prev
                  </Button>
                  <Button
                    OnClick={() =>
                      setVisibleProject((prev) =>
                        //eslint-disable-next-line
                        prev === projectList.length ? 1 : prev + 1
                      )
                    }
                  >
                    next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default Project;
