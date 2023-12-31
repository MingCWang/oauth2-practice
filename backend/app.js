import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './src/routes.js';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.server = app.listen(3000, () => {
	console.log('Server running on port 3000');
});

app.use('/', routes);


