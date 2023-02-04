import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import 'express-async-errors';

import singnupRouter from './router/signUp.js';
import tweetsRouter from './router/tweets.js';

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets', tweetsRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});
const handleListening = () => {
  console.log(`🔥Server listening on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
