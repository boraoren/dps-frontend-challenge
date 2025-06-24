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
	getTestLogger: (path: string) => {
		return consola.withTag(`Test/${path}`);
	},
	getBlocks: () => {

		return consola.withTag('Blocks');
	},
	getFeaturesLogger: () => {
		return consola.withTag('Features');
	},
	getServicesLogger: () => {
		return consola.withTag('Services');
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
	getHooks: (path: string) => {
		return consola.withTag(`Hooks/${path}`);
	}
};

export default UtilitiesLogger;