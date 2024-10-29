<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { Modal } from 'flowbite-svelte';
	import BudgetCategoryList from './BudgetCategoryList.svelte';
	import categoryStore from '@/store/category.store';
	import type { CategoryType } from '../types';

	type Props = {
		journeyId: number;
	};
	const props: Props = $props();
	const { journeyId } = props;

	let show = $state(false);

	let newCategory: Omit<CategoryType, 'id'> = $state({
		journeyId,
		category: '',
		budget: 0,
		spent: 0
	});

	const openStartJourney = () => {
		show = true;
	};

	const addCategory = () => {
		if (newCategory.category.trim() && newCategory.budget) {
			categoryStore.addCategory(newCategory);
			newCategory = {
				journeyId,
				category: '',
				budget: 0,
				spent: 0
			};
		}
	};
</script>

<Button onclick={openStartJourney} color="blue" outline size="xs">Add Category</Button>
{#if show}
	<Modal title="Manage the budget for your journey" bind:open={show} autoclose outsideclose={true}>
		<div class="content">
			<div>
				<form onsubmit={addCategory}>
					<div class="mb-4 flex items-center gap-2">
						<div class="form-field flex-1">
							<input
								placeholder="Category"
								type="text"
								id="task"
								bind:value={newCategory.category}
								class="w-full rounded border px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
								required
							/>
						</div>
						<div class="form-field flex-1">
							<input
								placeholder="add budget"
								min={0}
								type="number"
								id="budget"
								bind:value={newCategory.budget}
								class="w-full rounded border px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
								required
							/>
						</div>
						<input
							type="submit"
							disabled={!newCategory.category.length}
							class="{`disabled:bg-sky-400'} cursor-pointer rounded bg-blue-500 px-2 py-1 text-sm text-white disabled:cursor-not-allowed`}}"
							value="add"
						/>
					</div>
				</form>
			</div>
			<div class="-mx-4 max-h-96 overflow-y-auto px-4">
				<BudgetCategoryList {journeyId} />
			</div>
		</div>
	</Modal>
{/if}
