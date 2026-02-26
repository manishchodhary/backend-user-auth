import { Router } from "express";
const route = Router();

import { healthCheck } from "../controllers/health.controller.js";

route.get("/", healthCheck);

export default route;
