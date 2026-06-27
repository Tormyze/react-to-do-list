import { useState } from "react"

function AddTask({ onAddTask }) {
  const inputStyle = 'bg-gray-700 text-sm text-blue-400 tracking-wide placeholder:text-gray-500 p-2 rounded-sm focus:outline-none w-full'

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [emptyError, setEmptyError] = useState(false)

  function handleAddTask() {
    if (!title.trim() || !desc.trim()) {
      return setEmptyError(true)
    }

    onAddTask(title, desc)
    setTitle('')
    setDesc('')
  }

  return (
    <fieldset onKeyDown={(e) => e.key == 'Enter' && handleAddTask()} className="w-1/2 space-y-2 bg-gray-800 rounded-lg p-4 inset-shadow-sm inset-shadow-gray-700/50">
      <label htmlFor="title" className="text-sm tracking-wide block mb-0.5">Task title</label>
      <input id="title" type="text" placeholder="Your title..." required className={`${inputStyle}`} value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="desc" className="text-sm tracking-wide block mb-0.5">Task description</label>
      <input id="desc" type="text" placeholder="Your description..." required className={`${inputStyle}`} value={desc} onChange={(e) => setDesc(e.target.value)} />

      <button onClick={handleAddTask} className="text-xs font-medium w-full py-2 rounded-sm bg-gray-900 hover:cursor-pointer hover:bg-gray-900/80">Add Task</button>

      {emptyError && (
        <p className="text-yellow-500 text-xs text-center tracking-wide">Fill both the fields!</p>
      )}
    </fieldset>
  )
}

export default AddTask;
