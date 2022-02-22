import express from 'express';
import { config } from 'dotenv';
import rollbar from './rollbar';
import { home, math, notFound } from './routes';

config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(rollbar.errorHandler());

app.use('/public', express.static('dist/public'));

app.get('/', home);

app.get('/:operation/:a/:b', math);

app.get('*', notFound);

app.listen(PORT);

// eslint-disable-next-line no-console
console.log(`Running on port ${PORT}`);
