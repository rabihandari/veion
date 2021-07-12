import express from 'express';

import { cv_storage } from '../config/storage.js';
import { applyJob, sendMail } from '../controllers/index.js'

const router = express.Router();

router.post('/applyJob', cv_storage.single('cv'), applyJob);
router.post('/sendMail', sendMail);

export default router;