"use strict";

var _app = _interopRequireDefault(require("./app"));
var _dotenv = require("dotenv");
require("./database");
var _chalk = _interopRequireDefault(require("chalk"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _dotenv.config)();
var PORT = process.env.PORT || 3000;
_app["default"].listen(PORT);
console.log(_chalk["default"].green("server is running on port ".concat(PORT)));