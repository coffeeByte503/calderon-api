"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _require = require("mongoose"),
  Schema = _require.Schema,
  model = _require.model;
var roleSchema = new Schema({
  name: String
}, {
  timestamps: true,
  versionKey: false
});
var _default = model("Role", roleSchema);
exports["default"] = _default;