<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { Alert } from 'flowbite-svelte';
	import { PlusOutline } from 'flowbite-svelte-icons';
	import { Modal } from 'flowbite-svelte';
	let show = false;
	const openStartJourney = () => {
		show = true;
	};

	const closeJourneyModal = () => {
		show = false;
	};

	const manageOutsideClick = (event: any) => {
		if (event.target.classList.contains('container-modal')) {
			show = false;
		}
	};
</script>

<div>
	<div class="p-8">
		<Alert>
			<span class="font-medium">Info alert!</span>
			Change a few things up and try submitting again.
		</Alert>
	</div>
	<Button color="red" pill onclick={openStartJourney}>
		<p>Start a new journey</p>
		<PlusOutline />
	</Button>
	{#if show}
		<Modal title="Start your journey" bind:open={show} autoclose outsideclose={true}>
			<div class="content">
				<div class="text-light pt-2">welcome lets get started</div>
			</div>
		</Modal>
	{/if}
</div>
