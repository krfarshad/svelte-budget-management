<script lang="ts">
	import { error } from '@sveltejs/kit';
	import { trips } from '../../utils/mockData';
	import ExpenseContent from './ExpenseContent.svelte';
	import Tasks from './Tasks.svelte';
	import Overview from './Overview.svelte';

	// Fetch trip data
	const { id } = $props();
	const trip = trips.find((trip) => trip.id == id);
	if (!trip) error(404);

	// Tabs and data initialization
	let activeTab = $state('Overview');

	// Functions to manage tasks and expenses
</script>

<div class="m-8">
	<h1 class="text-xl font-bold">{trip.name}</h1>

	<div class="flex items-center justify-between gap-4">
		<div class="w-full max-w-xs">
			<div class="mb-2 h-6 overflow-hidden rounded-md bg-gray-200">
				<div class="h-full bg-blue-500" style="width: {trip.budget}%"></div>
			</div>
			<p class="text-sm text-gray-600">Budget usage: {trip.budget}%</p>
		</div>
	</div>

	<div class="mt-8 p-4">
		<div class="mb-4 flex space-x-4 rounded-md bg-gray-100 text-center">
			{#each ['Overview', 'Tasks', 'Expenses'] as tab}
				<button
					class={`border-b-2 px-6 py-3 ${
						activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
					} focus:outline-none`}
					onclick={() => (activeTab = tab)}
				>
					{tab}
				</button>
			{/each}
		</div>

		<div class="rounded-md bg-gray-100 p-4">
			{#if activeTab === 'Overview'}<Overview />{/if}

			{#if activeTab === 'Tasks'}<Tasks />{/if}

			{#if activeTab === 'Expenses'}<ExpenseContent />{/if}
		</div>
	</div>
</div>
