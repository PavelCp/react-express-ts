import { Router } from "express";
import { checkAPI } from "../controllers/api";

const router = Router();

router.get("/", checkAPI);

export default router;
