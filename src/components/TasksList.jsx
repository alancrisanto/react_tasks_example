import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TasksList() {
	const { tasks } = useContext(TaskContext);
	if (tasks.length === 0) {
		return <h1 className=" text-white font-bold text-4xl text-center py-3">No hay tareas que mostar</h1>;
	}

	return (
		<div className=" grid  md:grid-cols-3 lg:grid-cols-4 gap-2 my-10">
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
}

export default TasksList;
