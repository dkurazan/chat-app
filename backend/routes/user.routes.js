import { Router } from "express";
import protectRote from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = Router();

router.get("/", protectRote, getUsersForSidebar)

export default router