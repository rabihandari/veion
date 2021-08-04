import express from 'express';

import { filesStorage } from '../config/storage.js';
import { applyJob, sendMail, getQuote } from '../controllers/index.js'

const router = express.Router();

router.post('/applyJob', filesStorage.single('cv'), applyJob);
router.post('/sendMail', sendMail);
router.post('/getQuote', filesStorage.single('pdfFile'), getQuote);

export default router;