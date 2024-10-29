import type { ExpenseType } from '@/features/expenses/types';
import { generateUniqueId } from '@/utils/generateUniqueId';
import { writable, get as svelteGet } from 'svelte/store';

const { subscribe, update } = writable<ExpenseType[]>([]);

const expenseStore = {
	subscribe,

	initializeExpenses: (initExpenses: ExpenseType[] | []) => {
		update((expenses) => {
			return [...expenses, ...initExpenses];
		});
	},

	addExpense: (newExpense: Omit<ExpenseType, 'id'>) => {
		update((expenses) => {
			const journeyIndex = expenses.findIndex((j) => j.journeyId === newExpense.journeyId);
			if (journeyIndex === -1) return expenses;
			const newValue: ExpenseType = {
				id: generateUniqueId(expenses),
				...newExpense
			};

			const updatedExpenses = [newValue, ...expenses];

			return updatedExpenses;
		});
	},

	getExpenses: (journeyId: number) => {
		const journeys = svelteGet(expenseStore);
		return journeys.filter((j) => j.journeyId === journeyId) || [];
	}
};

export default expenseStore;
