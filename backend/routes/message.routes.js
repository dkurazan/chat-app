import { Router } from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";
import { getMessages, sendMessage } from "../controllers/message.controllers.js";
import protectRote from "../middleware/protectRoute.js";

const router = Router();

router.get("/:id", protectRote, getMessages)
router.post("/send/:id", protectRote, sendMessage)

export default router;