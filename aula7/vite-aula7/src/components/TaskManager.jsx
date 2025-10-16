import React, { useState } from 'react'

const TaskManager = () => {
    // Tarefas predefinidas
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Ler um artigo' },
        { id: 2, text: 'Ler um livro' },
        { id: 3, text: 'Estudar React' },
        { id: 4, text: 'Dormir ' },
    ])

    // Função para deletar uma tarefa, de acordo com o ID da mesma
    const deleteTask = (taskId) => {
        console.log(taskId);

        setTasks((currentTasks) => {
            return currentTasks.filter((task) => task.id !== taskId)
        });
        alert('Deletada a task com ID: ' + taskId);
    }


    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => deleteTask(task.id)}>🗑️</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskManager