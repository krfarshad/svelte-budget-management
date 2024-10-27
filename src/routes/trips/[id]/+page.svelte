<script lang="ts">
	import { page } from '$app/stores';
	import { SingleTripPage } from '@/features/trip';
	import { get } from 'svelte/store';

	const tripId = get(page).params.id;
</script>

<main>
	<div class="container mx-auto px-2">
		<SingleTripPage id={tripId} />
	</div>
</main>
