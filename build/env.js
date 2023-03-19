"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _chalk = _interopRequireDefault(require("chalk"));
var _dotenv = require("dotenv");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _dotenv.config)();
var SECRETE = process.env.SECRETE;
if (!SECRETE) {
  console.log(_chalk["default"].red("SECRETE not set in environment variables"));
}
var _process$env = process.env,
  MONGODB_URI = _process$env.MONGODB_URI,
  MONGODB_DBNAME = _process$env.MONGODB_DBNAME;
if (!MONGODB_URI) {
  console.error(_chalk["default"].red("MONGODB_URI not set in environment variables"));
  process.exit(1);
}
if (!MONGODB_DBNAME) {
  console.error(_chalk["default"].red("MONGODB_DBNAME not set in environment variables"));
  process.exit(1);
}
var _default = {
  MONGODB_DBNAME: MONGODB_DBNAME,
  MONGODB_URI: MONGODB_URI,
  SECRETE: SECRETE
};
exports["default"] = _default;