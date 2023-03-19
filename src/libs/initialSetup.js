import Role from "../models/Role";
import User from "../models/User";
import chalk from "chalk";
import { config } from "dotenv";

config();

const { INITIAL_ROOTUSER_PASSWORD } = process.env;

if (!INITIAL_ROOTUSER_PASSWORD) {
  console.error(
    chalk.red("INITIAL_ROOTUSER_PASSWORD not set in environment variables")
  );
  process.exit(1);
}

export async function createRoles() {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    await Promise.all([
      new Role({ name: "cliente" }).save(),
      new Role({ name: "empleado" }).save(),
      new Role({ name: "admin" }).save(),
      new Role({ name: "root" }).save(),
    ]);
  } catch (err) {
    console.log(err);
  }
}

export async function createRootUser() {
  try {
    const root = await User.findOne({ phoneNumber: 10000000 });

    if (root) return;

    const roles = await Role.find();
    const rid = roles.map((r) => r._id);
    const newRoot = new User({
      userName: "root",
      phoneNumber: 10000000,
      password: await User.encryptPassword(INITIAL_ROOTUSER_PASSWORD),
      roles: rid,
    });
    await newRoot.save();
  } catch (err) {
    console.log(err);
  }
}
