<script lang="ts">
	import { clsx } from 'clsx';
	import { goto } from '$app/navigation';
	import { EyeOutline } from 'flowbite-svelte-icons';
	import EditTrip from './EditTrip.svelte';
	import type { TripProp } from '../types';

	let props = $props();
	const { trip } = props;
	const goToTrip = (id: number) => {
		goto(`/trips/${id}`);
	};

	const tripCardClass = (trip: TripProp) => {
		return clsx(
			`block rounded-md border border-gray-200 p-3 shadow-sm shadow-gray-200 transition-all hover:shadow-md hover:shadow-gray-300 hover:transition-all !border-l-8 flex items-center justify-between gap-2.5`,
			trip.status === 'inProgress' && '!border-l-green-500',
			trip.status === 'finish' && '!border-l-gray-500',
			trip.status === 'inPlan' && '!border-l-sky-500'
		);
	};
</script>

<li>
	<a href={`/trips/${trip.id}`} class={tripCardClass(trip)}>
		<span class="flex-1">
			<p>{trip.name}</p>
			<span class=" text-gray-650 text-sm"
				>{trip.time} <span class="text-xs text-slate-400">({trip.status})</span></span
			>
		</span>
		<span class="inline-flex gap-2.5">
			<EditTrip {trip} />
			<button onclick={() => goToTrip(trip.id)}>
				<EyeOutline />
			</button>
		</span>
	</a>
</li>
