function AddTask() {
  const inputStyle = 'bg-gray-700 text-sm text-blue-400 tracking-wide placeholder:text-gray-500 p-2 rounded-sm focus:outline-none w-full'

  return (
    <fieldset className="w-1/2 space-y-2 bg-gray-800 rounded-lg p-4 inset-shadow-sm inset-shadow-gray-700/50">
      <label htmlFor="title" className="text-sm tracking-wide block mb-0.5">Task title</label>
      <input id="title" type="text" placeholder="Your title..." required className={`${inputStyle}`} />

      <label htmlFor="desc" className="text-sm tracking-wide block mb-0.5">Task description</label>
      <input id="desc" type="text" placeholder="Your description..." className={`${inputStyle}`} />
    </fieldset>
  )
}

export default AddTask;
