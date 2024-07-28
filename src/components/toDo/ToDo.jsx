import styles from "./ToDo.module.css";
import Button from "../button/Button";

export default function ToDo() {
  return (
    <div className={styles.toDo}>
      <div className="container">
        <div className="header">
          <h1>To Do App</h1>
          <div className="add-new-task">
            <form id="new-task" className="new-task">
              <label>Enter Task</label>
              <input type="text" placeholder="Enter Task" name="details" />
              <label>Due</label>
              <input type="date" placeholder="Select Due time" name="due" />
              <Button value="add" color="green">Add</Button>
            </form>
          </div>
          <div className="filter">
            <label>Filter</label>
            <select id="filter">
              <option value="none">None</option>
              <option value="done">Done</option>
              <option value="due">Due</option>
            </select>
          </div>
          <div className="clear">
            <Button color="red">Remove All</Button>
          </div>
        </div>
        <div className="task-list" id="task-list">
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
