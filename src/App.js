import React, { useContext, useRef, useEffect } from 'react';
import { TaskContext } from './TaskContext';
import Task from './Task'
import './App.css';


export default function App() {

  const LOCAL_STORAGE_KEY = 'tasks';
  const taskNameRef = useRef()
  const [tasks, setTasks] = useContext(TaskContext)

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTasks) setTasks(storedTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  //adding new task
  function addTask(e){
    e.preventDefault();
    const taskName = taskNameRef.current.value
    if(!taskName) return
    setTasks(prev => [...prev, {taskName, completed:false}])

    taskNameRef.current.value = null
  }

  //clearing all tasks
  function clearAllTasks(){
    setTasks([])
  }

  return (
    <div className="container">
      <header>
        <p>Tasks <span>{tasks.filter(task => task.completed === false).length} left.</span></p>
        <button className='btn btn-clear-all' onClick={clearAllTasks}>Clear All</button>
      </header>

      <Task/>

      <footer>
        <form onSubmit={addTask}>
          <input type="text" ref={taskNameRef} name="" id="" placeholder='New task ...' />
          <input type="submit" className='btn btn-add' value="+"  />
        </form>
      </footer>
    </div>
  )
}
