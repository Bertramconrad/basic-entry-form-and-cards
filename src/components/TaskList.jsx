import React from "react";
import TaskCard from "./TaskCard";
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

function TaskList() {
  
  const {tasks} = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-3">¡No hay tareas!</h1>
    </div>  
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
