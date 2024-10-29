<script lang="ts">
	import { onMount } from 'svelte';
	import type { ExpenseType } from '../types';
	import { expensesMockData } from '../utils/mockData';
	import ExpenseList from './ExpenseList.svelte';
	import AddExpense from './AddExpense.svelte';
	import expenseStore from '@/store/expanse.store';
	type Props = {
		tripId: number;
	};
	const props: Props = $props();
	let { tripId: journeyId } = props;

	let expenses: ExpenseType[] = $state([]);

	onMount(() => {
		const filterExpenses = expensesMockData.filter((j) => j.journeyId === journeyId);
		if (expenses) {
			expenseStore.initializeExpenses(filterExpenses);
			expenses = filterExpenses;
		}
	});
</script>

<div class="flex flex-wrap items-center justify-between gap-2 px-4 pt-4">
	<h2 class="mb-4 text-lg font-bold">Expenses</h2>
	<div class="inline-flex items-center gap-3">
		<AddExpense {journeyId} />
	</div>
</div>
<div class="p-4">
	<ExpenseList {journeyId} />
</div>
