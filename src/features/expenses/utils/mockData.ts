import type { ExpenseType, CategoryType, JourneyExpenses } from '../types';

export const categoryMockData: CategoryType[] = [
	{ id: 1, journeyId: 1, category: 'Food', budget: 300, spent: 50 },
	{ id: 2, journeyId: 1, category: 'Transport', budget: 200, spent: 75 }
];

export const expensesMockData: ExpenseType[] = [
	{ id: 1, journeyId: 1, categoryId: 1, amount: 25, description: 'Lunch' },
	{ id: 2, journeyId: 1, categoryId: 2, amount: 50, description: 'Train ticket' }
];

export const journeysMockData: JourneyExpenses[] = [
	{
		journeyId: 1,
		categories: categoryMockData,
		expenses: expensesMockData
	}
];
