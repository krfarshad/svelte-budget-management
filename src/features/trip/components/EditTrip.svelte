<script lang="ts">
	import { EditOutline } from 'flowbite-svelte-icons';
	import { Modal } from 'flowbite-svelte';

	let props = $props();
	const { trip } = props;
	let defaultModal = $state(false);

	const openModal = () => {
		defaultModal = true;
	};

	const editTrip = (event: Event) => {
		event.stopPropagation();
		event.preventDefault();
		openModal();
	};
</script>

<button onclick={editTrip} class="p-2">
	<EditOutline />
</button>
<Modal title="Edit the trip" bind:open={defaultModal} autoclose>
	<div class="content">
		<div class="text-light pt-2">welcome lets get started</div>
	</div>
</Modal>
