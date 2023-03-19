const { Schema, model } = require("mongoose");

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Role", roleSchema);
