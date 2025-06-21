const UtilitiesArray = {
	getSelectedFields<
		T extends object,
		const K extends readonly (keyof T)[]
	>(
		array: T[],
		fields: K
	): Array<Pick<T, K[number]>> {
		return array.map(user =>
			fields.reduce((acc, key) => {
				acc[key] = user[key];
				return acc;
			}, {} as Pick<T, K[number]>)
		);
	}
};

export default UtilitiesArray;