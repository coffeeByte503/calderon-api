import User from "../models/User";

export default function createRoleChecker(roleName) {
  return async function verifyRole(req, res, next) {
    const { userId } = req;
    const user = await User.findById(userId).populate("roles");

    for (let role of user.roles) {
      if (role.name == roleName) {
        next();
        return;
      }
    }

    res
      .status(401)
      .json({ msg: `Usuario no autorizado. Necesita tener Rol: ${roleName}` });
  };
}
