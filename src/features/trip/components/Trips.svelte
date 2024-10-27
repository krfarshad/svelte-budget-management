<script lang="ts">
	import { trips } from '../utils/mockData';
	import TripCard from './TripCard.svelte';
</script>

<div>
	<h2 class="mb-4 text-center text-xl font-semibold">Trips</h2>
	{#if trips.length > 0}
		<ul class="mx-auto flex max-w-2xl flex-col gap-2.5">
			{#each trips as trip}<TripCard {trip} />{/each}
		</ul>
	{:else}
		<p class="text-center">You haven't set any trip plan yet.</p>
	{/if}
</div>
