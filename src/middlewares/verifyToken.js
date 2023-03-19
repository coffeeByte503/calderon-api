import { verify } from "jsonwebtoken";
import env from "../env";
import User from "../models/User";

const { SECRETE } = env;

export default async function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];

  try {
    const isValid = verify(token, SECRETE);
    req.userId = isValid.id;
    const res = await User.findById(isValid.id);
    if (!res) {
      res.status(401).json({ msg: "invalid token" });
    }

    if (isValid) {
      next();
    }
  } catch (err) {
    res.status(401).json({ msg: "invalid token" });
  }
}
