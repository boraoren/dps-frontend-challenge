import { consola } from 'consola';

enum LOG_LEVELS {
	SILENT = 0,
	FATAL = 1,
	ERROR = 2,
	WARN = 3,
	INFO = 4,
	DEBUG = 5,
	TRACE = 6
}

consola.level = LOG_LEVELS.DEBUG;


const UtilitiesLogger = {
	getTestLogger: (tag: string) => {
		return consola.withTag(`Test/${tag}`);
	},
	getBlocks: () => {

		return consola.withTag('Blocks');
	},
	getFeaturesLogger: () => {
		return consola.withTag('Features');
	},
	getServicesLogger: (tag: string) => {
		return consola.withTag(`Services/${tag}`);
	},
	getApiLogger: () => {
		return consola.withTag('Api');
	},
	getComponentLogger: () => {
		return consola.withTag('Components');
	},
	getStorybookLogger: () => {
		return consola.withTag('Storybook');
	},
	getHooks: (tag: string) => {
		return consola.withTag(`Hooks/${tag}`);
	},
};

export default UtilitiesLogger;