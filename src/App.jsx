import "./App.css";
import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      desc: "Learn the basics of React",
      completed: false,
    },
    {
      id: 2,
      title: "Build a To Do List",
      desc: "Create a simple to-do list application",
      completed: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function onDetailsClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (taskId == task.id) {
        return { ...task, expanded: !task.expanded };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center text-white">
      <h1 className=" text-6xl text-center font-medium font-stack text-shadow-lg text-shadow-black m-10">
        A Modern <span className="bg-linear-to-r text-blue-500">React</span> To
        Do List
      </h1>
      <AddTask />
      <TaskList
        tasks={tasks}
        onTaskClick={onTaskClick}
        onDetailsClick={onDetailsClick}
      />
    </div>
  );
}

export default App;
