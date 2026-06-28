import { ChevronDown, ChevronUp, Trash } from "lucide-react";

function TaskList({ tasks, onTaskClick, onDetailsClick, onDeleteClick }) {
  return (
    <ul className="w-1/2 space-y-2 bg-gray-800 rounded-lg p-4 inset-shadow-sm inset-shadow-gray-700/50">
      {tasks.map((task) => (
        <li key={task.id} className="group">
          <div onContextMenu={(e) => e.preventDefault()} onClick={(e) => e.ctrlKey && onDeleteClick(task.id)} className='flex justify-between'>
            <button onContextMenu={() => onDetailsClick(task.id)} onClick={() => onTaskClick(task.id)}
              className={`py-1 pl-2 border-l-2 border-gray-500 group-hover:border-blue-500 group-hover:border-l-3 group-hover:cursor-pointer group-active:border-cyan-500 group-active:text-gray-400 w-full text-start transition-all duration-40 ${task.completed && "line-through border-green-500 hover:border-green-500 text-gray-400"}`}
            >
            {task.title}
            </button>
            <button onContextMenu={() => onDetailsClick(task.id)} onClick={() => onDetailsClick(task.id)} className="group/seta">
              {task.expanded ? (
                  <ChevronUp className="text-gray-500 group-hover/seta:text-white/80 group-hover/seta:cursor-pointer w-full h-full px-1" />
                ) : (<ChevronDown className="text-gray-500 group-hover/seta:text-white/80 group-hover/seta:cursor-pointer w-full h-full px-1" />
                )}
            </button>
          </div>

          <div onContextMenu={(e) => e.preventDefault()} className="flex justify-between">
            <button className='text-gray-400 text-sm w-full text-start border-l-2 border-transparent pl-2 hover:cursor-pointer' onContextMenu={() => onDetailsClick(task.id)} onClick={() => onTaskClick(task.id)}>
              {task.expanded && (
                <p>{task.desc}</p>
              )}
            </button>
            <button>
              {task.expanded && (
              <Trash onClick={() => onDeleteClick(task.id)} className="text-gray-500 hover:text-red-500 hover:cursor-pointer w-full h-full px-1" />
              )}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
