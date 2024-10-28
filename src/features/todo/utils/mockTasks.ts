import type { TaskType } from '../types';

export const mockTasks: TaskType[] = [
	{
		id: 1,
		done: false,
		text: 'Book flights',
		tripId: 1
	},
	{
		id: 2,
		done: true,
		text: 'Check passport validity',
		tripId: 1
	},
	{
		id: 3,
		done: false,
		text: 'Reserve hotel',
		tripId: 1
	},
	{
		id: 4,
		done: true,
		text: 'Create packing list',
		tripId: 2
	},
	{
		id: 5,
		done: false,
		text: 'Arrange airport transportation',
		tripId: 2
	},
	{
		id: 6,
		done: false,
		text: 'Buy travel insurance',
		tripId: 1
	},
	{
		id: 7,
		done: true,
		text: 'Renew driver’s license',
		tripId: 2
	},
	{
		id: 8,
		done: false,
		text: 'Plan daily itinerary',
		tripId: 2
	},
	{
		id: 9,
		done: false,
		text: 'Prepare first aid kit',
		tripId: 2
	},
	{
		id: 10,
		done: true,
		text: 'Exchange currency',
		tripId: 1
	},
	{
		id: 11,
		done: false,
		text: 'Download offline maps',
		tripId: 104
	},
	{
		id: 12,
		done: false,
		text: 'Notify bank of travel dates',
		tripId: 1
	}
];
