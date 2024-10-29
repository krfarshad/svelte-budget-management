export const generateUniqueId = <T>(excepts: T & { id: number }[], digits: number = 4): number => {
	let id: number;
	do {
		id = Math.floor(Math.pow(10, digits) + Math.random() * 9000);
	} while (excepts.some((except) => except.id === id));
	return id;
};
