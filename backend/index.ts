import express from 'express';
import users from './routes/users';
import cors, { CorsOptions } from 'cors';


const app = express();
const port = 8080;

const allowedOrigins = [
	'http://localhost:3000',
	'http://localhost:6006',
];

const corsOptions: CorsOptions = {
	origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
		if (!origin || allowedOrigins.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	}
};

app.use(cors(corsOptions));



app.use(express.json());
app.use('/users', users);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
