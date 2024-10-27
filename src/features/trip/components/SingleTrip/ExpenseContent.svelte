<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	import { TrashBinOutline, EditOutline } from 'flowbite-svelte-icons';

	const addTask = () => tasks.push({ name: 'New Task', done: false });
	let defaultModal = $state(false);
	const editExpense = (index: number) => {
		// Add logic to edit expense
	};
	const deleteExpense = (index: number) => expenses.splice(index, 1);
	let tasks = [
		{ name: 'Book hotel', done: false },
		{ name: 'Prepare itinerary', done: true }
	];
	let expenses = [
		{ name: 'Flight', amount: 500 },
		{ name: 'Hotel', amount: 300 }
	];
</script>

<div class="p-4">
	<div class="mb-4 flex items-center justify-between border-b border-slate-300 pb-4">
		<h2 class="text-lg font-semibold">Expenses</h2>
		<button class="mt-2 rounded bg-blue-500 px-2 py-1 text-white" onclick={addTask}
			>Add Expense</button
		>
	</div>
	<ul>
		{#each expenses as expense, i}
			<li class="flex items-center gap-3 border-b border-slate-200 py-3 last:border-0">
				<div class="flex-1">
					<span class="font-semibold">{expense.name}</span>
					<span class="ml-2 text-gray-600">${expense.amount}</span>
				</div>
				<div class="flex space-x-2">
					<button class="text-gray-400" onclick={() => editExpense(i)}><EditOutline /></button>
					<button class="text-red-500" onclick={() => deleteExpense(i)}><TrashBinOutline /></button>
				</div>
			</li>
		{/each}
	</ul>
</div>
<Modal title="Add Expanse" bind:open={defaultModal} autoclose>
	<div class="content">
		<div class="text-light pt-2">welcome lets get started</div>
	</div>
</Modal>
