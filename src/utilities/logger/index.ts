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
	getTestLogger: () => {
		return consola.withTag('Test');
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
	}
};

export default UtilitiesLogger;