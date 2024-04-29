"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _category = require("../controller/category");
var router = (0, _express.Router)();
router.post("/add", _category.createCategory);
var _default = exports["default"] = router;