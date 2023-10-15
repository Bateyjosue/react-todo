/* eslint-disable react/prop-types */

function Todo({id,task, isCompleted, handleCompletedTask}) {
  return (
    <>
      <article className="flex gap-2 border-b-2 border-green-700  py-2 px-2 rounded-md">
        <input 
          id={id}
          onClick={handleCompletedTask}
          type="checkbox" 
          name="task" 
          defaultChecked={isCompleted}
          checked={isCompleted}
          />
        <label htmlFor="task" className={`${isCompleted ? 'line-through text-gray-500' : ''}`}>{task}</label>
      </article>
    </>
  )
}

export default Todo