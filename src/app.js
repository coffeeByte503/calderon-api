import express from "express";
import morgan from "morgan";

import productRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import { createRoles, createRootUser } from "./libs/initialSetup";

import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import verifyToken from "./middlewares/verifyToken";

const app = express();

createRoles();
createRootUser();

app.use(
  rateLimit({
    windowMs: 1000,
    max: 50,
  })
);

app.use(
  cors({
    origin: "*",
  })
);

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);

app.use(express.static(__dirname + "/public"));

app.use("/isauth", verifyToken, (req, res) => {
  res.status(200).json({ msg: "valid token" });
});

export default app;
