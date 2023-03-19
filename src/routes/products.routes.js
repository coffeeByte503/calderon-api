import { Router } from "express";
import * as productsController from "../controllers/products.controller";
import createRoleChecker from "../middlewares/createRoleChecker";
import verifyToken from "../middlewares/verifyToken";
const router = Router();

router.get(
  "/",
  [verifyToken, createRoleChecker("cliente")],
  productsController.getProducts
);

router.get(
  "/:productId",
  [verifyToken, createRoleChecker("cliente")],
  productsController.getProductById
);

router.post(
  "/",
  [verifyToken, createRoleChecker("admin")],
  productsController.createProduct
);

router.put(
  "/:productId",
  [verifyToken, createRoleChecker("admin")],
  productsController.updateProductById
);

router.delete(
  "/:productId",
  [verifyToken, createRoleChecker("admin")],
  productsController.deleteProductById
);

export default router;
