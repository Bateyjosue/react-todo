
function App() {

  return (
    <>
      <main className="container mx-auto px-8">
        <h1 className="text-8xl font-bold text-center my-10 opacity-30">todos</h1>
        <div className="border flex justify-between rounded-full p-2">
          <input 
            type="text" 
            name="todo"
            placeholder="Add todo..."
            />
            <span className="material-symbols-outlined">add_circle</span>
        </div>
      </main>
    </>
  )
}

export default App
