import express from 'express';
import 'express-async-errors';
import {
  getTweetById,
  getTweets,
  createTweet,
  updateTweet,
  removeTweet,
} from '../controller/tweet.js';
import * as tweetController from '../controller/tweet.js';

const router = express.Router();

router.get('/', tweetController.getTweets);
router.get('/:id', tweetController.getTweetById);
router.post('/', tweetController.createTweet);
router.put('/:id', tweetController.updateTweet);
router.delete('/:id', tweetController.removeTweet);

export default router;
