<script lang="ts">
	import expensesStore from '@/store/expanse.store';
	import { onMount } from 'svelte';
	import type { CategoryType, ExpenseType } from '../types';
	import categoryStore from '@/store/category.store';
	import { categoryMockData } from '../utils/mockData';

	type Props = {
		journeyId: number;
	};

	const props: Props = $props();
	const { journeyId } = props;

	let expenses: ExpenseType[] | null | [] = $state(null);
	let categories: CategoryType[] | null | [] = $state(null);

	onMount(() => {
		expenses = expensesStore.getExpenses(journeyId);
		const mockCategories = categoryMockData.filter((cat) => cat.journeyId == journeyId) ?? [];
		categories = mockCategories as [];
	});

	categoryStore.subscribe((value) => {
		const journeyCategories = value.filter((j) => j.journeyId === journeyId) || [];
		categories = journeyCategories as [];
	});

	expensesStore.subscribe((value) => {
		const journeyExpenses = value.filter((expense) => expense.journeyId === journeyId) || [];
		expenses = journeyExpenses as [];
	});

	const findCategory = (id: number): CategoryType | undefined => {
		return categories?.find((cat) => cat.id == id);
	};
</script>

{#if expenses && expenses.length > 0}
	<ul class="space-y-2 py-2">
		{#each expenses as { description, categoryId, amount }}
			<li
				class="rounded-md border border-gray-100 bg-white p-4 shadow-md shadow-slate-200 transition-all hover:shadow-gray-400 hover:transition-all"
			>
				<div class="flex items-center justify-between">
					<div>
						<h3 class="font-semibold text-gray-800">{description}</h3>
						<p class="text-sm text-gray-600">
							Category: {findCategory(categoryId)?.category ?? '-'}
						</p>
					</div>
					<div>
						<span class="inline-block rounded-full px-2 py-1 text-xs font-semibold">
							Spent: ${amount}
						</span>
					</div>
				</div>
			</li>
		{/each}
	</ul>
{/if}
