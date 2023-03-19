import User from "../models/User";

export default async function isEmployee(req, res, next) {
  const { userId } = req;

  const user = await User.findById(userId).populate("roles");

  let gotPermission = false;
  user.roles.forEach((role) => {
    if (role.name === "empleado") {
      gotPermission = true;
    }
  });

  if (gotPermission) {
    next();
  } else {
    res.status(401).json({ msg: "no tiene permisos suficientes" });
  }
}
