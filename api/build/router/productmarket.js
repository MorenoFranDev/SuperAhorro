"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _productmarket = require("../controller/productmarket");
var _express = require("express");
var _supermarket = require("../controller/supermarket");
var _uploadsFile = _interopRequireDefault(require("../libs/uploadsFile"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.post("/add", _productmarket.createProductMarket);
router.get("/find", _productmarket.findArticles);
router.post("/add-json", _uploadsFile["default"].single('file'), _productmarket.createProductList);
// router.post("/add-json",createProductList)
router.post("/cartshop/", _supermarket.findCartShop);
var _default = exports["default"] = router;