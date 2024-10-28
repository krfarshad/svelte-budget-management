import type { TaskType } from '@/features/todo/types';
import { writable, get as svelteGet } from 'svelte/store';

const { subscribe, update, set } = writable<TaskType[] | null>(null);

const tasksStore = {
	subscribe,

	initialize: (tasks: TaskType[]) => set(tasks),

	get: () => svelteGet(tasksStore) as TaskType[] | null,
	set: (tasks: TaskType[]) => set(tasks),

	// Add a new task
	addTask: (newTask: Omit<TaskType, 'id'>) => {
		update((tasks) => {
			if (!tasks) return tasks;
			const taskWithId = {
				...newTask,
				id: generateUniqueId(tasks)
			};
			return [taskWithId, ...tasks];
		});
	},

	// Update an existing task
	updateTask: (updatedTask: TaskType) => {
		update((tasks) => {
			if (!tasks) return tasks;
			const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);
			if (taskIndex !== -1) {
				const updatedTasks = [...tasks];
				updatedTasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
				return updatedTasks;
			}
			console.warn(`Task with id ${updatedTask.id} not found.`);
			return tasks;
		});
	},

	// Delete a task by ID
	deleteTask: (taskId: number) => {
		update((tasks) => (tasks ? tasks.filter((task) => task.id !== taskId) : tasks));
	},

	// Fetch tasks by trip ID
	getTasksByTripId: (tripId: number) => {
		const tasks = svelteGet(tasksStore);
		return tasks ? tasks.filter((task) => task.tripId === tripId) : [];
	},

	// Toggle down task
	toggleTaskDone: (taskId: number) => {
		update(
			(tasks) =>
				tasks && tasks.map((task) => (task.id === taskId ? { ...task, done: !task.done } : task))
		);
	}
};

// Generate a unique ID (4-digit random number that doesn't duplicate existing IDs)
const generateUniqueId = (tasks: TaskType[]): number => {
	let id: number;
	do {
		id = Math.floor(1000 + Math.random() * 9000);
	} while (tasks.some((task) => task.id === id));
	return id;
};

export default tasksStore;
