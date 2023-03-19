import jwt from "jsonwebtoken";
import User from "../models/User";
import Role from "../models/Role";
import env from "../env";

const { SECRETE } = env;

export async function login(req, res) {
  const { phoneNumber, password } = req.body;
  const user = await User.findOne({ phoneNumber });

  if (!user) {
    res.status(404).json({ msg: "usuario o contrasena incorrecto" });
    return;
  }

  const validPassword = await User.comparePassword(password, user.password);

  if (!validPassword) {
    res.status(404).json({ msg: "usuario o contrasena incorrecto" });
    return;
  }

  const token = jwt.sign({ id: user._id }, SECRETE, {
    expiresIn: "7d",
  });

  res.status(200).json({ token });
}

export async function signup(req, res) {
  const { userName, phoneNumber, password } = req.body;

  const clienteRole = await Role.findOne({ name: "cliente" });

  const newUser = new User({
    userName,
    phoneNumber,
    password: await User.encryptPassword(password),
    roles: [clienteRole._id],
  });

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, SECRETE, {
    expiresIn: "7d",
  });

  res.status(200).json({ token });
}
