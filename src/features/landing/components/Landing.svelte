<script lang="ts">
	import StartJourneyButton from './StartJourneyButton.svelte';
	import { Trips } from '@/features/trip';
</script>

<section class="my-4">
	<div class="container mx-auto px-2">
		<div class="flex justify-center">
			<StartJourneyButton />
		</div>
	</div>
</section>

<section>
	<div class="container mx-auto px-2">
		<Trips />
	</div>
</section>
