import Utilities from '../index.ts';

const UtilitiesString = {
	/**
	 * Inserts a space between lowercase and uppercase letters in a camelCase string.
	 *
	 * Example: "firstName" ➝ "first Name"
	 */
	addSpacesToCamelCase: (text:string) =>{
		return text.replace(/([a-z])([A-Z])/g, '$1 $2');
	},
	/**
	 * Capitalizes the first letter of the given string.
	 *
	 * Example: "first name" ➝ "First name"
	 */
	capitalizeFirstChars: (text:string)=>{
		return text.replace(/^./, (str) => str.toUpperCase());
	},
	/**
	 * Converts camelCase strings to human-readable format.
	 *
	 * Example: "firstName" ➝ "First Name"
	 */
	toReadableText: (text:string) => {
		const spaceForCamelCase = Utilities.string.addSpacesToCamelCase(text);
		return Utilities.string.capitalizeFirstChars(spaceForCamelCase);

	}
};

export default UtilitiesString;