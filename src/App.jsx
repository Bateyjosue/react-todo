import { useState } from "react"
import Todos from "./components/Todo"
import Todo from "./components/Todo"

function App() {
  const [tasks, setState] = useState([])
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
            />
            <span className="material-symbols-outlined mr-2 text-3xl text-green-700 font-bold">add_circle</span>
        </div>
        <section className="todo--tasks my-8 border py-4 px-2 rounded-md">
          {
            tasks.length > 0 ?
            (tasks.map(task => (
              <Todo key={task.id} {...task}></Todo>
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


