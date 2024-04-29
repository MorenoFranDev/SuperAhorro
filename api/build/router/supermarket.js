"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _supermarket = require("../controller/supermarket");
var router = (0, _express.Router)();
router.post("/add", _supermarket.createSupermarket);
var _default = exports["default"] = router;