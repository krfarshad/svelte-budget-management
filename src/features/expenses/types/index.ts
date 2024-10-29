
export type CategoryType = {
	id: number;
	journeyId: number,
	category: string;
	budget: number;
	spent: number;
};

export type ExpenseType = {
	id: number;
	journeyId: number;
	categoryId: number;
	amount: number;
	description: string;
};

export type JourneyExpenses = {
	journeyId: number;
	categories: CategoryType[];
	expenses: ExpenseType[];
};
