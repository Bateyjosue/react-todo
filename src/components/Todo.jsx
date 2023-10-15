/* eslint-disable react/prop-types */

function Todo({task, isCompleted}) {
  return (
    <>
      <article className="flex gap-2 border-b-2 border-green-700  py-2 px-2 rounded-md">
        <input 
          type="checkbox" 
          name="task" 
          id="task"
          defaultChecked={isCompleted}
          />
        <label htmlFor="task" className={`${isCompleted ? 'line-through text-gray-500' : ''}`}>{task}</label>
      </article>
    </>
  )
}

export default Todo