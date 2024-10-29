<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { Modal } from 'flowbite-svelte';
	import expensesStore from '@/store/expanse.store';
	import ExpenseList from './ExpenseList.svelte';
	import type { CategoryType, ExpenseType } from '../types';
	import { onMount } from 'svelte';
	import categoryStore from '@/store/category.store';
	type Props = {
		journeyId: number;
	};
	const props: Props = $props();
	const { journeyId } = props;

	let show = $state(false);
	let categories: CategoryType[] | null | [] = $state(null);

	let newExpense: Omit<ExpenseType, 'id'> = $state({
		journeyId,
		categoryId: 0,
		amount: 0,
		description: ''
	});

	onMount(() => {
		categories = categoryStore.getCategories(journeyId);
	});

	const openStartJourney = () => {
		show = true;
	};

	const addExpense = () => {
		if (newExpense.categoryId && newExpense.description && newExpense.amount) {
			expensesStore.addExpense(newExpense);
			newExpense = {
				journeyId,
				categoryId: 0,
				amount: 0,
				description: ''
			};
		}
	};
</script>

<Button onclick={openStartJourney} color="blue" outline size="xs">Add Expense</Button>
{#if show}
	<Modal title="Manage the expenses in your journey" bind:open={show} autoclose outsideclose={true}>
		<div class="content">
			<div>
				<form onsubmit={addExpense}>
					<div class="mb-4 flex items-center gap-2">
						<div class="form-field flex-1">
							<input
								placeholder="Category"
								type="text"
								bind:value={newExpense.description}
								id="task"
								class="w-full rounded border px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
								required
							/>
						</div>
						<div class="form-field flex-1">
							{#if categories && categories.length > 0}
								<select
									id="budget"
									bind:value={newExpense.categoryId}
									class="w-full rounded border px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
									required
								>
									{#each categories as { id, category }}
										<option value={id}>{category}</option>
									{/each}
								</select>
							{/if}
						</div>
						<input
							type="submit"
							disabled={!newExpense.description.length}
							class="{`disabled:bg-sky-400'} cursor-pointer rounded bg-blue-500 px-2 py-1 text-sm text-white disabled:cursor-not-allowed`}}"
							value="add"
						/>
					</div>
				</form>
			</div>
			<div class="-mx-4 max-h-96 overflow-y-auto px-4">
				<ExpenseList {journeyId} />
			</div>
		</div>
	</Modal>
{/if}
