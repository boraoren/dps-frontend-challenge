import express from 'express';
import users from './routes/users';

const app = express();
const port = 8080;

app.use(express.json());
app.use('/users', users);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
