import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import authRouter from './router/auth.js';
import tweetsRouter from './router/tweets.js';
import { config } from './config.js';
import { Server } from 'socket.io';
import { db } from './db/database.js';

const PORT = config.host.port;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets', tweetsRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

const handleListening = () => {
  console.log(`✅Listening to http://localhost:${PORT} 🚀`);
};

app.listen(8080, handleListening);
