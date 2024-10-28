<script lang="ts">
	import { mockTasks } from '../utils/mockTasks';
	import AddTask from './AddTask.svelte';
	import TaskList from './TaskList.svelte';
	const {tripId} = $props();

	let taskItems = mockTasks.filter(task=> task.tripId ==tripId)
</script>

<div class="p-4">
	<div class="mb-2 flex items-center justify-between border-b border-slate-300 pb-4">
		<h2 class="text-lg font-semibold">Tasks</h2>
		<AddTask tripId={tripId}/>
	</div>
	<TaskList taskItems={taskItems}/>
</div>
