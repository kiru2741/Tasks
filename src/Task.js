import React, { useContext } from 'react'
import { TaskContext } from './TaskContext';

export const Task = () => {

    const [tasks, setTasks] = useContext(TaskContext)

    function deleteTask(e){
        const targetTask = e.target.closest('.task').querySelector('p').textContent
        
        setTasks(prev => [...prev.filter(task => task.taskName !== targetTask )])
    }

    function toggleCompleted(e){

        const targetTaskP = e.target.closest('.task').querySelector('p')

        targetTaskP.classList.toggle('strike')

        setTasks(prev => prev.map(task => {
            if(task.taskName === targetTaskP.textContent){
                return {
                    taskName: task.taskName,
                    completed: !task.completed
                }
            }else{
                return task
            }
        }))
    }


    return (
        <section className='section-tasks'>
            {
                tasks.map((task, index) => {
                    return <div className='task' key={index}>
                        <p className={task.completed ? 'strike' : null}>{task.taskName}</p>
                        <button className="btn btn-done" onClick={toggleCompleted}>L</button>
                        <button className="btn btn-delete" onClick={deleteTask}>+</button>
                    </div>
                })
            }
        </section>
    )
}

export default Task;