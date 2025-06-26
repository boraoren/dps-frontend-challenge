import { Request, Response, Router } from 'express';
import Database from '../../database';
import UserDomain from '../../database/users/index.domain';

const router = Router();

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

interface PostGetUsersBody {
	pagination: Pagination;
	options: Options;
	filters: Filters;
}

interface PostGetUsersResponse {
	users: UserDomain[];
	total: number;
	skip: number;
	limit: number;
}

router.get('/ping', (
	_req: Request, res: Response
) => {
	res.send('I\'m alive');
});

router.post('/',
	(
		req: Request<Record<string, never>, unknown, PostGetUsersBody>,
		res: Response
	) => {
		const { pagination, options, filters } = req.body;
		const response: PostGetUsersResponse = Database
			.users
			.getUsers(pagination, options, filters);

		res.send(response);

	});

export default router;
