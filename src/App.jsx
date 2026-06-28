import "./App.css";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState( JSON.parse(localStorage.getItem('tasks')) || [] );

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

  function onDeleteClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTask(title, desc) {
    const nTask = {
      id: tasks.length + 1,
      title,
      desc,
      completed: false
    }

    setTasks([...tasks, nTask]);
    console.log([...tasks, nTask]);
  }

  {/* Atualiza o localStorage */}
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="w-full min-h-screen space-y-12 py-12 bg-linear-to-b from-gray-800 to-gray-950 flex flex-col items-center text-gray-100">
      <h1 className="text-6xl text-center font-medium font-stack text-shadow-lg text-shadow-black hover:cursor-default px-10">
        A Modern <span className="text-blue-500">React</span> To
        Do List
      </h1>
      <div className="w-full flex flex-col items-center gap-2 mb-20">
        <AddTask onAddTask={onAddTask} />
        {tasks.length > 0 ? (
          <> {/* React Fragment - é uma tag vazia (<>) que só serve para envolver outras */}
            <TaskList
              tasks={tasks}
              onTaskClick={onTaskClick}
              onDetailsClick={onDetailsClick}
              onDeleteClick={onDeleteClick}
            />
            <p className="text-xs text-gray-500 hover:cursor-default">
              Right click to show task details
            </p>
            <p className="text-xs text-gray-500 hover:cursor-default -mt-1.5">
              Ctrl + click &#x2022; <span className="text-red-600/90">Delete task</span>
            </p>
          </>
        ) : (
          <p className="text-xl mt-1 text-gray-500 hover:cursor-default">Create your <span className="text-blue-500">first task</span>!</p>
        )}
      </div>
    </div>
  );
}

export default App;
