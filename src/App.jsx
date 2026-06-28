import "./App.css";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Title from "./components/Title";

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

  // Atualiza o localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Simulação com dados de API (tire dos comentários para testar)
    // useEffect(() => {
    //   const fetchTodos = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //     const data = await response.json()
    //     setTasks(data)
    //   }
    //   fetchTodos()
    // }, [])

  return (
    <main className="w-full min-h-screen bg-linear-to-b from-gray-800 to-gray-950 flex flex-col justify-center items-center text-gray-100 md:justify-start md:py-12">
      <Title>A Modern <span className="text-blue-500">React</span> To Do List</Title>
      <section className="w-full flex flex-col items-center gap-2 mb-20">
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
          <p className="text-sm md:text-xl mt-1 text-gray-500 hover:cursor-default">Create your <span className="text-blue-500">first task</span>!</p>
        )}
      </section>
    </main>
  );
}

export default App;
