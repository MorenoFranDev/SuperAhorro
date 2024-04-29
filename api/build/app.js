"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _supermarket = _interopRequireDefault(require("./router/supermarket"));
var _productmarket = _interopRequireDefault(require("./router/productmarket"));
var _region = _interopRequireDefault(require("./router/region"));
var _category = _interopRequireDefault(require("./router/category"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use("/region", _region["default"]);
app.use("/supermarket", _supermarket["default"]);
app.use("/product", _productmarket["default"]);
app.use("/category", _category["default"]);
app.get("/hello", function (req, res) {
  res.json("EXITOSO");
});
var _default = exports["default"] = app;