import Utilities from '../utilities';
import { ApiPathName } from '../api';
import UserDomain from '../../backend/database/users/index.domain.ts';

const logger = Utilities.logger.getApiLogger();

interface Filters {
	name?: string;
	city?: string;
	oldestPerCity?: boolean;
}

interface Pagination {
	limit: number;
	skip?: number;
	total?: number;
}

interface Concat {
	values: string[];
	to: string;
}

interface Options {
	select: string[];
	concat?: Concat[];
}


interface Parameters {
	pagination: Pagination;
	options: Options;
	filters: Filters;
}


interface GetUsersResponse{
	users: UserDomain[];
	total: number;
	skip: number;
	limit: number;
}


const ApiProxy = {
	getList: async (pathName: ApiPathName, parameters: Parameters): Promise<GetUsersResponse> => {
		logger.debug(parameters);
		const { pagination, options, filters } = parameters;

		const url = new URL(`http://127.0.0.1:8080/${pathName}`);

		const res = await fetch(url.toString(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				pagination,
				options,
				filters
			})
		});

		if (!res.ok) {
			const errorMessage = `Failed to fetch ${pathName}: ${res.statusText}`;
			logger.error(errorMessage);
			throw new Error(errorMessage);
		}

		return await res.json();
	},
};

export default ApiProxy;
