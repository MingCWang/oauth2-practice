import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

app.server = app.listen(3000, () => {
	console.log('Server running on port 3000');
});