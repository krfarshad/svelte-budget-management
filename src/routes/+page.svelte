<script lang="ts">
	import { Landing } from '@/features/landing';

	let firstName = 'farshad';
	let lastName = 'karimi';
	let fullName = firstName + lastName;

	const changeName = (name: string) => {
		fullName = name + lastName;
	};
</script>

<main>
	<Landing />
</main>
