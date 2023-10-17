import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-blue-500 text-white p-4 rounded-md">
      <div className="text-center">
        <h1 className="text-xl font-bold capitalize">Title: {task.title}</h1>
      </div>
      <div className="text-center">
        <p className="text-yellow-200 font-bold text-sm">
          Description: {task.description}
        </p>
      </div>
      <div className="text-center">
        <button
          className="bg-red-400 px-2 py-1 rounded-md font-bold mt-4 text-white hover:bg-red-700 hover:text-yellow-200"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
