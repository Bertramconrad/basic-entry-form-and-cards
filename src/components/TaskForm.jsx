import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);

  const handleGuardar = (e) => {
    setTitle(title.trim());
    setDescription(description.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //alert("- " + title + " - " + description);

    if (title.length === 0 || description.length === 0) {
      alert("¡Debe suministrar un nombre y una descripción!");
      return;
    }

    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
    //document.getElementById("nb_tarea").focus;
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-blue-500 mb-4 p-4">
      <div className="text-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        </div>
        <div className="text-center">
          <input
            id="nb_tarea"
            placeholder="Nombre de la tarea"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="bg-slate-300 p-3 w-full mb-2"
            autoFocus
          />
        </div>
        <div className="text-center">
          <textarea
            placeholder="Descripción de la tarea"
            onChange={(e) => setDescription(e.target.value)}
            className="bg-slate-300 p-3 w-full mb-2"
            value={description}
          ></textarea>
        </div>
        <div className="align-middle">
          <button
            onClick={handleGuardar}
            className="bg-green-400 px-2 py-1 rounded-md font-bold text-white mt-4 hover:bg-green-700 hover:text-yellow-200"
          >
            Guardar
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
