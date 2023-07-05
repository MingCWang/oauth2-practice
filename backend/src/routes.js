
import express from 'express';
import { googleOauthHandler } from './controllers/googleOAuth.js';
const router = express.Router();

router.post('/api/retrieve-token', (req, res) => {
	googleOauthHandler(req, res);
})

export default router;