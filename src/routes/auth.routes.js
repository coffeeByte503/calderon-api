import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
const router = Router();

router.post("/login", authCtrl.login);
router.post("/signup", authCtrl.signup);

export default router;
