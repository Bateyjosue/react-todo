/* eslint-disable react/prop-types */

function Todo({task, isCompleted}) {
  return (
    <>
      <article className="flex gap-2">
        <input 
          type="checkbox" 
          name="task" 
          id="task"
          checked={isCompleted} 
          />
        <label htmlFor="task">{task}</label>
      </article>
    </>
  )
}

export default Todo