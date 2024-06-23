import express from "express";
import { addVolunteer } from "../controllers/volunteer.controller.js";

const router = express.Router();

router.post("/add", addVolunteer);

export default router;
