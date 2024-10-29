import type { CategoryType } from '@/features/expenses/types';
import { generateUniqueId } from '@/utils/generateUniqueId';
import { get, writable } from 'svelte/store';

const { subscribe, update } = writable<CategoryType[]>([]);

const categoryStore = {
	subscribe,

	// Initialize categories for a journey
	initializeCategories: (cats: CategoryType[] | []) => {
		update((categories) => {
			return [...categories, ...cats];
		});
	},

	// Set or add a new category to a journey
	addCategory: (newCategory: Omit<CategoryType, 'id'>) => {
		update((categories) => {
			const journeyIndex = categories.findIndex((j) => j.journeyId === newCategory.journeyId);
			if (journeyIndex === -1) return categories;
			const newValue: CategoryType = { ...newCategory, id: generateUniqueId(categories) };
			return [newValue, ...categories];
		});
	},

	// Get categories for a specific journey
	getCategories: (journeyId: number) => {
		const journeys = get(categoryStore);
		return journeys.filter((j) => j.journeyId === journeyId) || [];
	}
};

export default categoryStore;
