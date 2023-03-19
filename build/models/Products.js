"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _require = require("mongoose"),
  Schema = _require.Schema,
  model = _require.model;
var productSchema = new Schema({
  name: String,
  categories: Array,
  minUnitPurchase: Number,
  box: Object,
  halfBox: Object,
  flavors: Array,
  thumbnailURL: String,
  glassContainer: Boolean
}, {
  timestamps: true,
  versionKey: false
});
var _default = model("Product", productSchema);
exports["default"] = _default;