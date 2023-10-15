/* eslint-disable react/prop-types */

function Todo({id,task, isCompleted, handleCompletedTask, handleTaskDeleted}) {
  return (
    <>
      <article className="flex items-center justify-between gap-2 border-b-[1px] border-green-700  py-2 px-2">
        <input 
          id={id}
          onClick={handleCompletedTask}
          type="checkbox" 
          name="task" 
          defaultChecked={isCompleted}
          checked={isCompleted}
          />
        <label 
          htmlFor="task" 
          className={`grow ${isCompleted ? 'line-through text-gray-500' : ''}`}
          >{task}</label>
        <span 
          id={id}
          className="material-symbols-outlined bg-red-500 text-white rounded-full p-1 cursor-pointer"
          onClick={handleTaskDeleted}
          >
            delete
        </span>
      </article>
    </>
  )
}

export default Todo