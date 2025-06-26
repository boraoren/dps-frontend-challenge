import { Request, Response, Router } from 'express';
import Database from '../../database';

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
		res.send(Database.users.getUsers(pagination, options, filters));

	});

export default router;
