import TaksList from "./components/TasksList";
import TaskForm from "./components/TaskForm";

function App() {
	return (
		<main className="bg-zinc-800 h-screen">
			<div className="container mx-auto p-10">
				<TaskForm /> {/* Segundo valor es la funcion */}
				<TaksList />
			</div>
		</main>
	);
}

export default App;
