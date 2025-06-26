const UtilitiesTest = {
	given: (description: string, fn: () => void): void => {
		describe(`🟨 Given ${description}`, fn);
	},
	when: (description: string, fn: () => void): void => {
		describe(`🟦 When ${description}`, fn);
	},
	then: (description: string, fn: () => void): void => {
		it(`🟩 Then ${description}`, fn);
	}
};

export default UtilitiesTest;
