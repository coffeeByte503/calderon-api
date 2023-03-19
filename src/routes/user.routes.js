import { Router } from "express";
import * as userController from "../controllers/user.controller";
import createRoleChecker from "../middlewares/createRoleChecker";
import verifyToken from "../middlewares/verifyToken";
const router = Router();

router.get(
  "/list",
  [verifyToken, createRoleChecker("admin")],
  userController.getBasicUserList
);

router.get("/self", verifyToken, userController.getSelfUser);

router.delete("/delete/:userId", userController.deleteUserById);

export default router;
