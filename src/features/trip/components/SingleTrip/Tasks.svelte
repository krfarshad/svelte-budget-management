<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	import { TrashBinOutline, EditOutline } from 'flowbite-svelte-icons';

	let defaultModal = $state(false);

	let tasks = [
		{ name: 'Book hotel', done: false },
		{ name: 'Prepare itinerary', done: true }
	];

	const addTask = () => tasks.push({ name: 'New Task', done: false });
	const toggleTaskDone = (index: number) => (tasks[index].done = !tasks[index].done);
	const editTask = (i: number) => {};
	const deleteTask = (i: number) => {};
</script>

<div class="p-4">
	<div class="mb-2 flex items-center justify-between border-b border-slate-300 pb-4">
		<h2 class="text-lg font-semibold">Tasks</h2>
		<button class="mt-2 rounded bg-blue-500 px-2 py-1 text-white" onclick={addTask}>Add Task</button
		>
	</div>
	<ul>
		{#each tasks as task, i}
			<li class="flex items-center gap-3 border-b border-slate-200 py-3 last:border-0">
				<div class="flex-1">
					<input
						type="checkbox"
						class="mr-2"
						checked={task.done}
						onclick={() => toggleTaskDone(i)}
					/>
					<span class={`${task.done ? 'text-gray-400 line-through' : 'text-gray-800'}`}
						>{task.name}</span
					>
				</div>
				<div class="flex space-x-2">
					<button class="text-gray-400" onclick={() => editTask(i)}><EditOutline /></button>
					<button class="text-red-500" onclick={() => deleteTask(i)}><TrashBinOutline /></button>
				</div>
			</li>
		{/each}
	</ul>
	<Modal title="Add tasks" bind:open={defaultModal} autoclose>
		<div class="content">
			<div class="text-light pt-2">welcome lets get started</div>
		</div>
	</Modal>
</div>
