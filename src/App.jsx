import { useEffect, useState } from "react"
import Todo from "./components/Todo"
import { nanoid } from "nanoid"

function App() {
  const [tasks, setTask] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  
  const [inputData, setInputData] = useState('')
  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(tasks))
  },[tasks])

  function handleChange(e){
    setInputData(()=> e.target.value)
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    if(inputData){
      const task = {
        id: nanoid(),
        task: inputData,
        isCompleted: false
      }
  
      setTask((prevTask) => {
        return [
          ...prevTask,
          task
        ]
      })
  
      setInputData('')
    }
  }

  function handleCompletedTask(e){
    // e.preventDefault();
    const completedTask= tasks.map(task => {
      if(task.id === e.target.id) {
        return {
          ...task, 
          isCompleted: !task.isCompleted
        }
      }else return {
        ...task
      }
    })
    console.log(completedTask);

    setTask(completedTask)
  }

  return (
    <>
      <main className="container mx-auto px-8">
        <h1 className="text-8xl font-bold text-center my-10 opacity-30">todos</h1>
        <div className="border flex justify-between items-center gap-2 rounded-full">
          <input 
            type="text" 
            name="todo"
            placeholder="Add todo..."
            className="border-none w-full h-full py-3 px-4 rounded-full outline-none"
            onChange={handleChange}
            value={inputData}
            />
            <span 
              className="material-symbols-outlined mr-2 text-3xl text-green-700 font-bold cursor-pointer"
              onClick={handleAddTask}
              >add_circle</span>
        </div>
        <div>
        </div>
        <section className="todo--tasks my-8 border border-green-700 rounded-md">
          {
            tasks.length > 0 ?
            (tasks.map((task, index) => (
              <Todo 
                key={index} {...task} 
                handleCompletedTask={handleCompletedTask}
                />
            )))
            :
            (<div className="text-4xl font-bold opacity-30">No Task Found...</div>)
          }
        </section>
      </main>
    </>
  )
}

export default App


