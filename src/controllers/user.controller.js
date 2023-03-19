import User from "../models/User";

export async function getBasicUserList(req, res) {
  const users = await User.find(
    {},
    {
      userName: true,
      phoneNumber: true,
    }
  );

  res.status(200).json(users);
}

export async function deleteUserById(req, res) {
  const userDeleted = await User.findByIdAndDelete(req.params.userId);

  res.status(204).json(userDeleted);
}

export async function getSelfUser(req, res) {
  const user = await User.findById(req.userId, {
    phoneNumber: true,
    location: true,
    roles: true,
    userName: true,
    locationReferences: true,
  }).populate("roles", { name: true });

  res.status(200).json(user);
}
