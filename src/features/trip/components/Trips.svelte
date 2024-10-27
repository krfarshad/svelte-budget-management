<script lang="ts">
	import { clsx } from 'clsx';
	type TripProp = {
		id: number;
		name: string;
		time: string;
		status: 'inProgress' | 'finish' | 'inPlan';
	};
	const trips: TripProp[] = [
		{ id: 1, name: 'New York', time: '2024-03/04', status: 'inProgress' },
		{ id: 2, name: 'Zurich', time: '2024-01/04', status: 'finish' }
	];

	const tripCardClass = (trip: TripProp) => {
		return clsx(
			`block rounded-md border border-gray-200 p-3 shadow-sm shadow-gray-200 transition-all hover:shadow-md hover:shadow-gray-300 hover:transition-all !border-l-8`,
			trip.status === 'inProgress' && '!border-l-green-500',
			trip.status === 'finish' && '!border-l-gray-500',
			trip.status === 'inPlan' && '!border-l-sky-500'
		);
	};
</script>

<div>
	<h2 class="mb-4 text-center text-xl font-semibold">Trips</h2>
	{#if trips.length > 0}
		<ul class="mx-auto flex max-w-2xl flex-col gap-2.5">
			{#each trips as trip}
				<li>
					<a href={`/trips/${trip.id}`} class={tripCardClass(trip)}>
						<p>{trip.name}</p>
						<span class=" text-gray-650 text-sm"
							>{trip.time} <span class="text-xs text-slate-400">({trip.status})</span></span
						>
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="text-center">You haven't set any trip plan yet.</p>
	{/if}
</div>
