<script lang="ts">
	import categoryStore from '@/store/category.store';
	import { onDestroy, onMount } from 'svelte';
	import type { CategoryType } from '../types';
	import { categoryMockData } from '../utils/mockData';

	type Props = {
		journeyId: number;
	};

	const props: Props = $props();
	const { journeyId } = props;

	let categories: CategoryType[] | null | [] = $state(null);

	onMount(() => {
		const categories = categoryMockData.filter((cat) => cat.journeyId == journeyId);
	});

	categoryStore.subscribe((value) => {
		const journeyCategories = value.filter((j) => j.journeyId === journeyId) || [];
		categories = journeyCategories as [];
	});
</script>

{#if categories && categories.length > 0}
	<ul class="space-y-2 py-2">
		{#each categories as { category, budget, spent }}
			<li
				class="rounded-md border border-gray-100 bg-white p-4 shadow-md shadow-slate-200 transition-all hover:shadow-gray-400 hover:transition-all"
			>
				<div class="flex items-center justify-between">
					<div>
						<h3 class="font-semibold text-gray-800">{category}</h3>
						<p class="text-sm text-gray-600">Budget: ${budget}</p>
					</div>
					<div>
						<span class="inline-block rounded-full px-2 py-1 text-xs font-semibold">
							Spent: ${spent}
						</span>
					</div>
				</div>
			</li>
		{/each}
	</ul>
{/if}
