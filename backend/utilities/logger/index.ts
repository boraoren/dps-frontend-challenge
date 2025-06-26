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
	getDatabase: (tag: string) => {
		return consola.withTag(`Backend/${tag}`);
	},
};

export default UtilitiesLogger;