import express from 'express';
import { addNGO } from '../controllers/ngo.controller.js';

const router = express.Router();

router.post('/add-ngo', addNGO);

export default router;
