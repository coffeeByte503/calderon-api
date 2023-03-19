"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _products = _interopRequireDefault(require("./routes/products.routes"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _initialSetup = require("./libs/initialSetup");
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _expressRateLimit = require("express-rate-limit");
var _verifyToken = _interopRequireDefault(require("./middlewares/verifyToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
(0, _initialSetup.createRootUser)();
app.use((0, _expressRateLimit.rateLimit)({
  windowMs: 1000,
  max: 50
}));
app.use((0, _cors["default"])({
  origin: "*"
}));
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use("/api/auth", _auth["default"]);
app.use("/api/users", _user["default"]);
app.use("/api/products", _products["default"]);
app.use(_express["default"]["static"](__dirname + "/public"));
app.use("/isauth", _verifyToken["default"], function (req, res) {
  res.status(200).json({
    msg: "valid token"
  });
});
var _default = app;
exports["default"] = _default;