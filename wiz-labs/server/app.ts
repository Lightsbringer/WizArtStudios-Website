import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import api from './src/api/api.router';

const envConfig = require('./envconfig.json');
const bodyParser = require('body-parser');
const env = process.env.NODE_ENV;
const configuration = envConfig[env!];

const app: Express = express();

// dbInit().catch((err) => console.error(err));
// app.use('/logs', logs);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static('assets'));
app.use('/api', api);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the other side!');
});

app.listen(configuration.port, () => {
  console.log(`server is running on port ${configuration.port}`);
});
