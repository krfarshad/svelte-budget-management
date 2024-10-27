export type TripProp = {
	id: number;
	name: string;
	time: string;
	status: 'inProgress' | 'finish' | 'inPlan';
	budget: number;
};
