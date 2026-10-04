import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import "./App.css";

function App() {
  // Task 1: tasks stored with useState
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish React assignment", category: "Study" },
    { id: 2, title: "Join the coding club meeting", category: "Club" },
    { id: 3, title: "Return library books", category: "Personal" },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Study");

  // Task 4: runs every time the tasks list changes
  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total tasks:", tasks.length);
  }, [tasks]);

  // Task 3: add a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTitle.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
    };

    setTasks([...tasks, newTask]);
    setNewTitle("");
  };

  return (
    <div className="app">
      <h1>Campus Task Board - Anoosha</h1>

      <form className="task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        >
          <option>Study</option>
          <option>Club</option>
          <option>Personal</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      <p>Total tasks: {tasks.length}</p>

      {/* Task 1 + 2: map() with a unique key, props passed to TaskCard */}
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;