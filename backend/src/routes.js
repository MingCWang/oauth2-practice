
import express from 'express';
import { googleOauthHandler } from './controllers/session.js';
const router = express.Router();

router.get('/api/sessions/oauth/google', (req, res) => {
	googleOauthHandler(req, res);
})

export default router;