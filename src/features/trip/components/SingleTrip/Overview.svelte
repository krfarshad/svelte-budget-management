<script lang="ts">
	let budgetCategories = [
		{ category: 'Food', amount: 200 },
		{ category: 'Transport', amount: 150 },
		{ category: 'Accommodation', amount: 300 }
	];

	let lastExpenses = [
		{ name: 'Dinner', amount: 30, category: 'Food' },
		{ name: 'Taxi', amount: 15, category: 'Transport' }
	];
</script>

<div class="p-4">
	<div class="mb-4 flex items-center justify-between border-b border-slate-300 pb-4">
		<h2 class="text-lg font-semibold">Overview</h2>
	</div>
	<h2 class="text-lg font-semibold">Last Expenses</h2>

	<ul class="mb-8">
		{#each lastExpenses as expense}
			<li class="flex items-center gap-3 border-b border-slate-200 py-3 last:border-0">
				<span>{expense.name}</span>
				<span>${expense.amount}</span>
			</li>
		{/each}
	</ul>
	<h2 class="mb-2 text-lg font-semibold">Budget Allocation</h2>
	<div class="rounded-lg bg-white p-4 shadow">
		<!-- Placeholder for budget chart -->
		<p>Chart for allocated budget by category</p>
		<ul>
			{#each budgetCategories as category}
				<li class="flex items-center justify-between gap-2 py-2 text-sm">
					<span>{category.category}</span>
					<span class="h-px w-full flex-1 border-dotted bg-gray-100"></span>
					<span>${category.amount}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
