import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	// Destructurar para traer solo el createTask del objeto
	const { createTask } = useContext(TaskContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		createTask({ title, description });
		setTitle("");
		setDescription("");
	};

	return (
		<div className=" max-w-md mx-auto">
			<form className="bg-gray-700 p-10 mb-4" onSubmit={handleSubmit}>
				<h2 className=" text-2xl font-bold text-white mb-3">Crea tu tarea</h2>
				<input
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					type="text"
					placeholder="escribe tu tarea"
					value={title}
					autoFocus
					className=" bg-slate-300 p-3 w-full mb-2"
				/>
				<textarea
					placeholder="Escribe la descripción de la tarea"
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					value={description}
					className=" bg-slate-300 p-3 w-full mb-2"
				></textarea>
				<button className="bg-indigo-500 px-2 py-1 text-white hover:bg-indigo-400">Guardar</button>
			</form>
		</div>
	);
}

export default TaskForm;
